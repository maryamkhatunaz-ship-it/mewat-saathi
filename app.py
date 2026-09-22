from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import os
import uuid
from datetime import datetime

app = Flask(__name__)
CORS(app)

# =========================================================
# BASIC SETTINGS
# =========================================================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DB_PATH = os.path.join(
    BASE_DIR,
    "mewat_saathi.db"
)

UPLOAD_FOLDER = os.path.join(
    BASE_DIR,
    "media_uploads"
)

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


# =========================================================
# DATABASE CONNECTION
# =========================================================

def get_db():

    conn = sqlite3.connect(DB_PATH)

    conn.row_factory = sqlite3.Row

    return conn


# =========================================================
# DATABASE SETUP / SAFE MIGRATION
# =========================================================

def init_db():

    conn = get_db()

    # -----------------------------------------------------
    # Original complaints table
    # -----------------------------------------------------

    conn.execute("""
        CREATE TABLE IF NOT EXISTS complaints (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            name TEXT NOT NULL,

            mobile TEXT NOT NULL,

            village TEXT NOT NULL,

            category TEXT NOT NULL,

            complaint TEXT NOT NULL,

            photo TEXT,

            video TEXT,

            status TEXT DEFAULT 'Pending'

        )
    """)

    conn.commit()


    # -----------------------------------------------------
    # Check existing columns
    # -----------------------------------------------------

    columns = conn.execute(
        "PRAGMA table_info(complaints)"
    ).fetchall()

    existing_columns = {
        row["name"]
        for row in columns
    }


    # -----------------------------------------------------
    # Add new columns automatically
    # -----------------------------------------------------

    new_columns = {

        "title":
            "TEXT",

        "tehsil":
            "TEXT",

        "landmark":
            "TEXT",

        "latitude":
            "REAL",

        "longitude":
            "REAL",

        "department":
            "TEXT",

        "support_count":
            "INTEGER DEFAULT 0",

        "created_at":
            "TEXT",

        "resolution_note":
            "TEXT"

    }


    for column_name, column_type in new_columns.items():

        if column_name not in existing_columns:

            conn.execute(
                f"""
                ALTER TABLE complaints
                ADD COLUMN {column_name} {column_type}
                """
            )


    # -----------------------------------------------------
    # Support table
    # "I Also Face This Issue"
    # -----------------------------------------------------

    conn.execute("""
        CREATE TABLE IF NOT EXISTS complaint_supports (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            complaint_id INTEGER NOT NULL,

            mobile TEXT,

            created_at TEXT,

            UNIQUE(complaint_id, mobile)

        )
    """)


    # -----------------------------------------------------
    # Public updates table
    # -----------------------------------------------------

    conn.execute("""
        CREATE TABLE IF NOT EXISTS complaint_updates (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            complaint_id INTEGER NOT NULL,

            status TEXT NOT NULL,

            note TEXT,

            created_at TEXT

        )
    """)


    conn.commit()

    conn.close()


init_db()


# =========================================================
# WEBSITE PAGES
# =========================================================

@app.route("/")
def home():

    return send_from_directory(
        BASE_DIR,
        "index.html"
    )


# =========================================================
# WORKER PAGE
# =========================================================

@app.route("/mewat-workers/mewat.html")
def worker_page():

    worker_folder = os.path.join(
        BASE_DIR,
        "mewat-workers"
    )

    return send_from_directory(
        worker_folder,
        "mewat.html"
    )


# =========================================================
# OTHER FRONTEND FILES
# =========================================================

@app.route("/<path:path>")
def serve_frontend(path):

    file_path = os.path.join(
        BASE_DIR,
        path
    )

    if os.path.isfile(file_path):

        return send_from_directory(
            BASE_DIR,
            path
        )

    return jsonify({
        "success": False,
        "message": "Page not found",
        "requested_page": path
    }), 404


# =========================================================
# BACKEND TEST
# =========================================================

@app.route("/api")
def api_home():

    return jsonify({

        "success": True,

        "message":
            "Mewat Saathi Backend Chalu Hai!"

    })


# =========================================================
# HEALTH CHECK
# =========================================================

@app.route("/health")
def health():

    return jsonify({

        "status": "ok",

        "message":
            "Mewat Saathi is running"

    })


# =========================================================
# DEPARTMENT AUTO DETECTION
# =========================================================

def get_department(category):

    departments = {

        "Water":
            "Public Health Engineering Department",

        "Road":
            "Public Works Department",

        "Roads & Transport":
            "Public Works Department",

        "Electricity":
            "Dakshin Haryana Bijli Vitran Nigam",

        "Street Lights":
            "Local Administration / Panchayat",

        "Sanitation & Cleanliness":
            "Municipal / Panchayat Administration",

        "Health":
            "Health Department",

        "Education":
            "Education Department",

        "Government":
            "Concerned Government Department",

        "Government Services":
            "Concerned Government Department",

        "Agriculture & Rural Development":
            "Agriculture / Rural Development Department",

        "Drainage & Flooding":
            "Local Administration / Panchayat",

        "Village Infrastructure":
            "Panchayat / Rural Development Department",

        "Environment":
            "Environment Department",

        "Public Safety":
            "Police / Local Administration",

        "Other":
            "Concerned Department",

        "Other / General Public Issue":
            "Concerned Department"

    }

    return departments.get(
        category,
        "Concerned Department"
    )


# =========================================================
# SAVE COMPLAINT
# =========================================================

@app.route(
    "/complaint",
    methods=["POST"]
)
def save_complaint():

    try:

        # -------------------------------------------------
        # Basic information
        # -------------------------------------------------

        name = request.form.get(
            "name",
            ""
        ).strip()

        mobile = request.form.get(
            "mobile",
            ""
        ).strip()

        village = request.form.get(
            "village",
            ""
        ).strip()

        category = request.form.get(
            "category",
            ""
        ).strip()

        complaint = request.form.get(
            "complaint",
            ""
        ).strip()


        # -------------------------------------------------
        # New information
        # -------------------------------------------------

        title = request.form.get(
            "title",
            ""
        ).strip()

        tehsil = request.form.get(
            "tehsil",
            ""
        ).strip()

        landmark = request.form.get(
            "landmark",
            ""
        ).strip()


        # -------------------------------------------------
        # GPS
        # -------------------------------------------------

        latitude_raw = request.form.get(
            "latitude",
            ""
        ).strip()

        longitude_raw = request.form.get(
            "longitude",
            ""
        ).strip()


        latitude = None
        longitude = None


        try:

            if latitude_raw:

                latitude = float(
                    latitude_raw
                )

            if longitude_raw:

                longitude = float(
                    longitude_raw
                )

        except ValueError:

            latitude = None
            longitude = None


        # -------------------------------------------------
        # Validation
        # -------------------------------------------------

        if not all([
            name,
            mobile,
            village,
            category,
            complaint
        ]):

            return jsonify({

                "success": False,

                "message":
                    "Please saari information fill karein."

            }), 400


        if not mobile.isdigit() or len(mobile) != 10:

            return jsonify({

                "success": False,

                "message":
                    "Mobile number exactly 10 digits ka hona chahiye."

            }), 400


        # -------------------------------------------------
        # Files
        # -------------------------------------------------

        photo = request.files.get(
            "photo"
        )

        video = request.files.get(
            "video"
        )


        photo_filename = None
        video_filename = None


        # -------------------------------------------------
        # Save photo
        # -------------------------------------------------

        if photo and photo.filename:

            extension = os.path.splitext(
                photo.filename
            )[1].lower()

            photo_filename = (
                f"{uuid.uuid4().hex}"
                f"{extension}"
            )

            photo.save(
                os.path.join(
                    app.config["UPLOAD_FOLDER"],
                    photo_filename
                )
            )


        # -------------------------------------------------
        # Save video
        # -------------------------------------------------

        if video and video.filename:

            extension = os.path.splitext(
                video.filename
            )[1].lower()

            video_filename = (
                f"{uuid.uuid4().hex}"
                f"{extension}"
            )

            video.save(
                os.path.join(
                    app.config["UPLOAD_FOLDER"],
                    video_filename
                )
            )


        # -------------------------------------------------
        # Department
        # -------------------------------------------------

        department = get_department(
            category
        )


        # -------------------------------------------------
        # Created time
        # -------------------------------------------------

        created_at = datetime.utcnow().isoformat()


        # -------------------------------------------------
        # Database insert
        # -------------------------------------------------

        conn = get_db()

        cursor = conn.execute("""
            INSERT INTO complaints
            (
                name,
                mobile,
                village,
                category,
                complaint,
                photo,
                video,
                status,
                title,
                tehsil,
                landmark,
                latitude,
                longitude,
                department,
                support_count,
                created_at
            )

            VALUES
            (
                ?, ?, ?, ?, ?, ?, ?, ?,
                ?, ?, ?, ?, ?, ?, ?, ?
            )
        """, (

            name,
            mobile,
            village,
            category,
            complaint,
            photo_filename,
            video_filename,
            "Pending",

            title,
            tehsil,
            landmark,

            latitude,
            longitude,

            department,

            0,

            created_at

        ))


        complaint_id = cursor.lastrowid


        # -------------------------------------------------
        # First timeline update
        # -------------------------------------------------

        conn.execute("""
            INSERT INTO complaint_updates
            (
                complaint_id,
                status,
                note,
                created_at
            )

            VALUES (?, ?, ?, ?)
        """, (

            complaint_id,

            "Pending",

            "Complaint successfully submitted.",

            created_at

        ))


        conn.commit()

        conn.close()


        # -------------------------------------------------
        # SUCCESS
        # -------------------------------------------------

        return jsonify({

            "success": True,

            "message":
                "Complaint Successfully Saved!",

            "id":
                complaint_id,

            "complaint_id":
                complaint_id,

            "status":
                "Pending",

            "department":
                department

        })


    except Exception as e:

        print(
            "Complaint Error:",
            e
        )

        return jsonify({

            "success": False,

            "message":
                "Complaint save nahi ho payi.",

            "error":
                str(e)

        }), 500


# =========================================================
# CHECK COMPLAINT STATUS
# =========================================================

@app.route(
    "/complaint/<int:complaint_id>",
    methods=["POST"]
)
def check_complaint(complaint_id):

    try:

        # -------------------------------------------------
        # Accept JSON OR FormData
        # -------------------------------------------------

        data = request.get_json(
            silent=True
        ) or {}

        mobile = str(
            data.get(
                "mobile",
                request.form.get(
                    "mobile",
                    ""
                )
            )
        ).strip()


        if not mobile:

            return jsonify({

                "success": False,

                "message":
                    "Mobile number required hai."

            }), 400


        conn = get_db()


        cursor = conn.execute("""
            SELECT
                id,
                name,
                mobile,
                village,
                category,
                complaint,
                status,
                title,
                tehsil,
                landmark,
                latitude,
                longitude,
                department,
                support_count,
                created_at,
                resolution_note

            FROM complaints

            WHERE id = ?
            AND mobile = ?
        """, (

            complaint_id,
            mobile

        ))


        row = cursor.fetchone()


        conn.close()


        if not row:

            return jsonify({

                "success": False,

                "message":
                    "Complaint ID ya mobile number galat hai."

            }), 404


        return jsonify({

            "success": True,

            "id":
                row["id"],

            "name":
                row["name"],

            "mobile":
                row["mobile"],

            "village":
                row["village"],

            "category":
                row["category"],

            "complaint":
                row["complaint"],

            "status":
                row["status"],

            "title":
                row["title"],

            "tehsil":
                row["tehsil"],

            "landmark":
                row["landmark"],

            "latitude":
                row["latitude"],

            "longitude":
                row["longitude"],

            "department":
                row["department"],

            "support_count":
                row["support_count"] or 0,

            "created_at":
                row["created_at"],

            "resolution_note":
                row["resolution_note"]

        })


    except Exception as e:

        print(
            "Status Error:",
            e
        )

        return jsonify({

            "success": False,

            "message":
                "Status check nahi ho paya.",

            "error":
                str(e)

        }), 500


# =========================================================
# ADMIN - ALL COMPLAINTS
# =========================================================

@app.route(
    "/complaints",
    methods=["GET"]
)
def get_complaints():

    try:

        conn = get_db()


        cursor = conn.execute("""
            SELECT
                id,
                name,
                mobile,
                village,
                category,
                complaint,
                photo,
                video,
                status,
                title,
                tehsil,
                landmark,
                latitude,
                longitude,
                department,
                support_count,
                created_at,
                resolution_note

            FROM complaints

            ORDER BY id DESC
        """)


        rows = cursor.fetchall()


        conn.close()


        complaints = []


        for row in rows:

            complaints.append({

                "id":
                    row["id"],

                "name":
                    row["name"],

                "mobile":
                    row["mobile"],

                "village":
                    row["village"],

                "category":
                    row["category"],

                "complaint":
                    row["complaint"],

                "photo":
                    row["photo"],

                "video":
                    row["video"],

                "status":
                    row["status"],

                "title":
                    row["title"],

                "tehsil":
                    row["tehsil"],

                "landmark":
                    row["landmark"],

                "latitude":
                    row["latitude"],

                "longitude":
                    row["longitude"],

                "department":
                    row["department"],

                "support_count":
                    row["support_count"] or 0,

                "created_at":
                    row["created_at"],

                "resolution_note":
                    row["resolution_note"]

            })


        return jsonify({

            "success": True,

            "complaints":
                complaints

        })


    except Exception as e:

        print(
            "Admin Error:",
            e
        )

        return jsonify({

            "success": False,

            "message":
                "Complaints load nahi ho payi.",

            "error":
                str(e)

        }), 500


# =========================================================
# UPDATE COMPLAINT STATUS
# =========================================================

@app.route(
    "/complaint/<int:complaint_id>/status",
    methods=["POST"]
)
def update_status(complaint_id):

    try:

        data = request.get_json(
            silent=True
        ) or {}


        # Also accept FormData
        if not data:

            data = request.form.to_dict()


        status = str(
            data.get(
                "status",
                ""
            )
        ).strip()


        resolution_note = str(
            data.get(
                "resolution_note",
                ""
            )
        ).strip()


        allowed_statuses = [

            "Pending",

            "In Progress",

            "Resolved"

        ]


        if status not in allowed_statuses:

            return jsonify({

                "success": False,

                "message":
                    "Invalid status."

            }), 400


        conn = get_db()


        # -------------------------------------------------
        # Update complaint
        # -------------------------------------------------

        cursor = conn.execute("""
            UPDATE complaints

            SET
                status = ?,
                resolution_note = ?

            WHERE id = ?
        """, (

            status,

            resolution_note,

            complaint_id

        ))


        changed = cursor.rowcount


        if changed == 0:

            conn.close()

            return jsonify({

                "success": False,

                "message":
                    "Complaint nahi mili."

            }), 404


        # -------------------------------------------------
        # Timeline
        # -------------------------------------------------

        conn.execute("""
            INSERT INTO complaint_updates
            (
                complaint_id,
                status,
                note,
                created_at
            )

            VALUES (?, ?, ?, ?)
        """, (

            complaint_id,

            status,

            resolution_note,

            datetime.utcnow().isoformat()

        ))


        conn.commit()

        conn.close()


        return jsonify({

            "success": True,

            "message":
                "Status updated successfully.",

            "id":
                complaint_id,

            "status":
                status

        })


    except Exception as e:

        print(
            "Update Status Error:",
            e
        )

        return jsonify({

            "success": False,

            "message":
                "Status update nahi ho paya.",

            "error":
                str(e)

        }), 500


# =========================================================
# COMPLAINT TIMELINE
# =========================================================

@app.route(
    "/complaint/<int:complaint_id>/timeline",
    methods=["GET"]
)
def complaint_timeline(complaint_id):

    try:

        conn = get_db()


        rows = conn.execute("""
            SELECT
                id,
                complaint_id,
                status,
                note,
                created_at

            FROM complaint_updates

            WHERE complaint_id = ?

            ORDER BY id ASC
        """, (

            complaint_id,

        )).fetchall()


        conn.close()


        timeline = []


        for row in rows:

            timeline.append({

                "id":
                    row["id"],

                "complaint_id":
                    row["complaint_id"],

                "status":
                    row["status"],

                "note":
                    row["note"],

                "created_at":
                    row["created_at"]

            })


        return jsonify({

            "success": True,

            "timeline":
                timeline

        })


    except Exception as e:

        print(
            "Timeline Error:",
            e
        )

        return jsonify({

            "success": False,

            "message":
                "Timeline load nahi ho payi."

        }), 500


# =========================================================
# I ALSO FACE THIS ISSUE
# =========================================================

@app.route(
    "/complaint/<int:complaint_id>/support",
    methods=["POST"]
)
def support_complaint(complaint_id):

    try:

        data = request.get_json(
            silent=True
        ) or {}


        mobile = str(
            data.get(
                "mobile",
                ""
            )
        ).strip()


        conn = get_db()


        # Check complaint exists
        complaint = conn.execute("""
            SELECT id
            FROM complaints
            WHERE id = ?
        """, (

            complaint_id,

        )).fetchone()


        if not complaint:

            conn.close()

            return jsonify({

                "success": False,

                "message":
                    "Complaint nahi mili."

            }), 404


        # -------------------------------------------------
        # Prevent duplicate support from same mobile
        # -------------------------------------------------

        if mobile:

            existing = conn.execute("""
                SELECT id

                FROM complaint_supports

                WHERE complaint_id = ?

                AND mobile = ?
            """, (

                complaint_id,

                mobile

            )).fetchone()


            if existing:

                conn.close()

                return jsonify({

                    "success": False,

                    "message":
                        "Aap already is issue ko support kar chuke hain."

                }), 409


        # -------------------------------------------------
        # Save support
        # -------------------------------------------------

        conn.execute("""
            INSERT INTO complaint_supports
            (
                complaint_id,
                mobile,
                created_at
            )

            VALUES (?, ?, ?)
        """, (

            complaint_id,

            mobile or None,

            datetime.utcnow().isoformat()

        ))


        # Increase support count

        conn.execute("""
            UPDATE complaints

            SET support_count =
                COALESCE(support_count, 0) + 1

            WHERE id = ?
        """, (

            complaint_id,

        ))


        conn.commit()


        # Get new count

        row = conn.execute("""
            SELECT support_count

            FROM complaints

            WHERE id = ?
        """, (

            complaint_id,

        )).fetchone()


        conn.close()


        return jsonify({

            "success": True,

            "message":
                "Issue support successfully added.",

            "support_count":
                row["support_count"]

        })


    except Exception as e:

        print(
            "Support Error:",
            e
        )

        return jsonify({

            "success": False,

            "message":
                "Support add nahi ho paya."

        }), 500


# =========================================================
# PUBLIC COMPLAINT FEED
# SAFE DATA ONLY
# =========================================================

@app.route(
    "/public-complaints",
    methods=["GET"]
)
def public_complaints():

    try:

        conn = get_db()


        rows = conn.execute("""
            SELECT

                id,

                title,

                village,

                tehsil,

                category,

                complaint,

                status,

                support_count,

                department,

                created_at

            FROM complaints

            ORDER BY id DESC

            LIMIT 100
        """).fetchall()


        conn.close()


        complaints = []


        for row in rows:

            complaints.append({

                "id":
                    row["id"],

                "title":
                    row["title"] or row["category"],

                "village":
                    row["village"],

                "tehsil":
                    row["tehsil"],

                "category":
                    row["category"],

                "complaint":
                    row["complaint"],

                "status":
                    row["status"],

                "support_count":
                    row["support_count"] or 0,

                "department":
                    row["department"],

                "created_at":
                    row["created_at"]

            })


        return jsonify({

            "success": True,

            "complaints":
                complaints

        })


    except Exception as e:

        print(
            "Public Feed Error:",
            e
        )

        return jsonify({

            "success": False,

            "message":
                "Public complaints load nahi ho payi."

        }), 500


# =========================================================
# MEWAT PULSE / STATISTICS
# =========================================================

@app.route(
    "/pulse",
    methods=["GET"]
)
def pulse():

    try:

        conn = get_db()


        total = conn.execute("""
            SELECT COUNT(*) AS count
            FROM complaints
        """).fetchone()["count"]


        pending = conn.execute("""
            SELECT COUNT(*) AS count
            FROM complaints
            WHERE status = 'Pending'
        """).fetchone()["count"]


        progress = conn.execute("""
            SELECT COUNT(*) AS count
            FROM complaints
            WHERE status = 'In Progress'
        """).fetchone()["count"]


        resolved = conn.execute("""
            SELECT COUNT(*) AS count
            FROM complaints
            WHERE status = 'Resolved'
        """).fetchone()["count"]


        supporters = conn.execute("""
            SELECT COALESCE(
                SUM(support_count),
                0
            ) AS count

            FROM complaints
        """).fetchone()["count"]


        categories = conn.execute("""
            SELECT
                category,
                COUNT(*) AS count

            FROM complaints

            GROUP BY category

            ORDER BY count DESC
        """).fetchall()


        tehsils = conn.execute("""
            SELECT
                tehsil,
                COUNT(*) AS count

            FROM complaints

            WHERE tehsil IS NOT NULL
            AND tehsil != ''

            GROUP BY tehsil

            ORDER BY count DESC
        """).fetchall()


        conn.close()


        return jsonify({

            "success": True,

            "pulse": {

                "total":
                    total,

                "pending":
                    pending,

                "in_progress":
                    progress,

                "resolved":
                    resolved,

                "supporters":
                    supporters,

                "categories": [

                    {
                        "category":
                            row["category"],

                        "count":
                            row["count"]
                    }

                    for row in categories

                ],

                "tehsils": [

                    {
                        "tehsil":
                            row["tehsil"],

                        "count":
                            row["count"]
                    }

                    for row in tehsils

                ]

            }

        })


    except Exception as e:

        print(
            "Pulse Error:",
            e
        )

        return jsonify({

            "success": False,

            "message":
                "Mewat Pulse load nahi ho paya."

        }), 500


# =========================================================
# MEDIA FILES
# =========================================================

@app.route(
    "/media/<filename>"
)
def media(filename):

    return send_from_directory(

        app.config[
            "UPLOAD_FOLDER"
        ],

        filename

    )


# =========================================================
# RUN
# =========================================================

if __name__ == "__main__":

    port = int(
        os.environ.get(
            "PORT",
            5000
        )
    )


    app.run(

        host="0.0.0.0",

        port=port,

        debug=False

    )