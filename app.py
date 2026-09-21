from flask import Flask, request, send_from_directory
from flask_cors import CORS
import sqlite3
import os
import uuid


app = Flask(__name__)

CORS(app)


UPLOAD_FOLDER = "media_uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)


# =========================
# DATABASE
# =========================

def create_database():

    connection = sqlite3.connect(
        "mewat_saathi.db"
    )

    cursor = connection.cursor()


    cursor.execute("""
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


    cursor.execute(
        "PRAGMA table_info(complaints)"
    )


    columns = [
        row[1]
        for row in cursor.fetchall()
    ]


    if "photo" not in columns:

        cursor.execute("""
            ALTER TABLE complaints
            ADD COLUMN photo TEXT
        """)


    if "video" not in columns:

        cursor.execute("""
            ALTER TABLE complaints
            ADD COLUMN video TEXT DEFAULT NULL
        """)


    if "status" not in columns:

        cursor.execute("""
            ALTER TABLE complaints
            ADD COLUMN status TEXT DEFAULT 'Pending'
        """)


    connection.commit()

    connection.close()


create_database()


# =========================
# HOME
# =========================

@app.route("/")
def home():

    return "Mewat Saathi Backend Chalu Hai!"


# =========================
# SUBMIT COMPLAINT
# =========================

@app.route(
    "/complaint",
    methods=["POST"]
)
def submit_complaint():

    try:

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


        complaint_text = request.form.get(
            "complaint",
            ""
        ).strip()


        # -------------------------
        # VALIDATION
        # -------------------------

        if not name:

            return {
                "success": False,
                "error":
                    "Naam nahi diya gaya."
            }, 400


        if not mobile:

            return {
                "success": False,
                "error":
                    "Mobile number nahi diya gaya."
            }, 400


        if not village:

            return {
                "success": False,
                "error":
                    "Village / Area nahi diya gaya."
            }, 400


        if not category:

            return {
                "success": False,
                "error":
                    "Problem category select karein."
            }, 400


        if not complaint_text:

            return {
                "success": False,
                "error":
                    "Problem details likhein."
            }, 400


        if (
            not mobile.isdigit()
            or len(mobile) != 10
        ):

            return {
                "success": False,
                "error":
                    "Mobile number 10 digit ka hona chahiye."
            }, 400


        # -------------------------
        # PHOTO
        # -------------------------

        photo = request.files.get(
            "photo"
        )

        photo_name = None


        if photo and photo.filename:

            extension = os.path.splitext(
                photo.filename
            )[1]


            photo_name = (
                str(uuid.uuid4())
                + extension
            )


            photo.save(
                os.path.join(
                    UPLOAD_FOLDER,
                    photo_name
                )
            )


        # -------------------------
        # VIDEO
        # -------------------------

        video = request.files.get(
            "video"
        )

        video_name = None


        if video and video.filename:

            extension = os.path.splitext(
                video.filename
            )[1]


            video_name = (
                str(uuid.uuid4())
                + extension
            )


            video.save(
                os.path.join(
                    UPLOAD_FOLDER,
                    video_name
                )
            )


        # -------------------------
        # DATABASE INSERT
        # -------------------------

        connection = sqlite3.connect(
            "mewat_saathi.db"
        )

        cursor = connection.cursor()


        cursor.execute("""
            INSERT INTO complaints
            (
                name,
                mobile,
                village,
                category,
                complaint,
                photo,
                video,
                status
            )

            VALUES (?, ?, ?, ?, ?, ?, ?, ?)

        """, (
            name,
            mobile,
            village,
            category,
            complaint_text,
            photo_name,
            video_name,
            "Pending"
        ))


        complaint_id =
            cursor.lastrowid


        connection.commit()

        connection.close()


        # -------------------------
        # RESPONSE
        # -------------------------

        return {

            "success": True,

            "message":
                "Complaint Successfully Saved!",

            "complaint_id":
                complaint_id,

            "status":
                "Pending"

        }


    except Exception as error:

        print(
            "COMPLAINT ERROR:",
            error
        )


        return {

            "success": False,

            "error":
                "Server mein problem aayi: "
                + str(error)

        }, 500


# =========================
# CHECK COMPLAINT STATUS
# =========================

@app.route(
    "/complaint/<int:complaint_id>",
    methods=["POST"]
)
def complaint_status(
    complaint_id
):

    try:

        mobile = request.form.get(
            "mobile",
            ""
        ).strip()


        if not mobile:

            return {

                "success": False,

                "error":
                    "Mobile number required hai."

            }, 400


        if (
            not mobile.isdigit()
            or len(mobile) != 10
        ):

            return {

                "success": False,

                "error":
                    "Mobile number 10 digit ka hona chahiye."

            }, 400


        connection = sqlite3.connect(
            "mewat_saathi.db"
        )

        cursor = connection.cursor()


        # IMPORTANT:
        # Complaint ID + same mobile
        # dono match hone chahiye.

        cursor.execute("""
            SELECT

                id,

                name,

                mobile,

                village,

                category,

                complaint,

                status

            FROM complaints

            WHERE id = ?

            AND mobile = ?

        """, (
            complaint_id,
            mobile
        ))


        data = cursor.fetchone()


        connection.close()


        # -------------------------
        # NOT FOUND
        # -------------------------

        if data is None:

            return {

                "success": False,

                "error":
                    "Complaint ID ya Mobile Number galat hai."

            }, 404


        # -------------------------
        # FULL DETAILS RETURN
        # -------------------------

        return {

            "success": True,

            "id":
                data[0],

            "name":
                data[1],

            "mobile":
                data[2],

            "village":
                data[3],

            "category":
                data[4],

            "complaint":
                data[5],

            "status":
                data[6]

        }


    except Exception as error:

        print(
            "STATUS ERROR:",
            error
        )


        return {

            "success": False,

            "error":
                "Server error: "
                + str(error)

        }, 500


# =========================
# ALL COMPLAINTS
# ADMIN PANEL
# =========================

@app.route(
    "/complaints",
    methods=["GET"]
)
def all_complaints():

    try:

        connection = sqlite3.connect(
            "mewat_saathi.db"
        )

        cursor = connection.cursor()


        cursor.execute("""
            SELECT

                id,

                name,

                mobile,

                village,

                category,

                complaint,

                photo,

                video,

                status

            FROM complaints

            ORDER BY id DESC

        """)


        rows = cursor.fetchall()


        connection.close()


        result = []


        for row in rows:

            result.append({

                "id":
                    row[0],

                "name":
                    row[1],

                "mobile":
                    row[2],

                "village":
                    row[3],

                "category":
                    row[4],

                "complaint":
                    row[5],

                "photo":
                    row[6],

                "video":
                    row[7],

                "status":
                    row[8]

            })


        return result


    except Exception as error:

        print(
            "ADMIN ERROR:",
            error
        )


        return {

            "error":
                "Complaints load nahi hui: "
                + str(error)

        }, 500


# =========================
# UPDATE STATUS
# ADMIN PANEL
# =========================

@app.route(
    "/complaint/<int:complaint_id>/status",
    methods=["POST"]
)
def update_status(
    complaint_id
):

    try:

        new_status = request.form.get(
            "status",
            ""
        ).strip()


        allowed_statuses = [

            "Pending",

            "In Progress",

            "Resolved"

        ]


        if new_status not in allowed_statuses:

            return {

                "success": False,

                "error":
                    "Invalid status."

            }, 400


        connection = sqlite3.connect(
            "mewat_saathi.db"
        )

        cursor = connection.cursor()


        cursor.execute("""
            UPDATE complaints

            SET status = ?

            WHERE id = ?

        """, (
            new_status,
            complaint_id
        ))


        if cursor.rowcount == 0:

            connection.close()


            return {

                "success": False,

                "error":
                    "Complaint nahi mili."

            }, 404


        connection.commit()

        connection.close()


        return {

            "success": True,

            "message":
                "Status Updated!",

            "id":
                complaint_id,

            "status":
                new_status

        }


    except Exception as error:

        print(
            "UPDATE ERROR:",
            error
        )


        return {

            "success": False,

            "error":
                "Status update error: "
                + str(error)

        }, 500


# =========================
# MEDIA
# =========================

@app.route(
    "/media/<filename>"
)
def media(filename):

    return send_from_directory(
        UPLOAD_FOLDER,
        filename
    )


# =========================
# START SERVER
# =========================

if __name__ == "__main__":

    print("")

    print("==============================")

    print(
        " Mewat Saathi Backend"
    )

    print("==============================")

    print(
        "Backend: http://127.0.0.1:5000"
    )

    print("==============================")

    print("")


    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )