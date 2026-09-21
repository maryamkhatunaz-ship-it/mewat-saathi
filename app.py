from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import os
import uuid

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "mewat_saathi.db")
UPLOAD_FOLDER = os.path.join(BASE_DIR, "media_uploads")

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


# =========================
# DATABASE
# =========================

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()

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
    conn.close()


init_db()


# =========================
# HOME / WEBSITE
# =========================

@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/<path:path>")
def serve_frontend(path):

    file_path = os.path.join(BASE_DIR, path)

    if os.path.isfile(file_path):
        return send_from_directory(BASE_DIR, path)

    return jsonify({
        "success": False,
        "message": "Page not found",
        "requested_page": path
    }), 404

# =========================
# BACKEND TEST
# =========================

@app.route("/api")
def api_home():
    return jsonify({
        "success": True,
        "message": "Mewat Saathi Backend Chalu Hai!"
    })


@app.route("/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "Mewat Saathi is running"
    })


# =========================
# SAVE COMPLAINT
# =========================

@app.route("/complaint", methods=["POST"])
def save_complaint():

    try:
        name = request.form.get("name", "").strip()
        mobile = request.form.get("mobile", "").strip()
        village = request.form.get("village", "").strip()
        category = request.form.get("category", "").strip()
        complaint = request.form.get("complaint", "").strip()

        if not all([name, mobile, village, category, complaint]):
            return jsonify({
                "success": False,
                "message": "Please saari information fill karein."
            }), 400

        photo = request.files.get("photo")
        video = request.files.get("video")

        photo_filename = None
        video_filename = None

        # -------------------------
        # PHOTO
        # -------------------------

        if photo and photo.filename:
            extension = os.path.splitext(photo.filename)[1].lower()
            photo_filename = f"{uuid.uuid4().hex}{extension}"

            photo.save(
                os.path.join(
                    app.config["UPLOAD_FOLDER"],
                    photo_filename
                )
            )

        # -------------------------
        # VIDEO
        # -------------------------

        if video and video.filename:
            extension = os.path.splitext(video.filename)[1].lower()
            video_filename = f"{uuid.uuid4().hex}{extension}"

            video.save(
                os.path.join(
                    app.config["UPLOAD_FOLDER"],
                    video_filename
                )
            )

        # -------------------------
        # DATABASE
        # -------------------------

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
                status
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            name,
            mobile,
            village,
            category,
            complaint,
            photo_filename,
            video_filename,
            "Pending"
        ))

        complaint_id = cursor.lastrowid

        conn.commit()
        conn.close()

        return jsonify({
            "success": True,
            "message": "Complaint Successfully Saved!",
            "id": complaint_id
        })

    except Exception as e:

        print("Complaint Error:", e)

        return jsonify({
            "success": False,
            "message": "Complaint save nahi ho payi."
        }), 500


# =========================
# CHECK COMPLAINT STATUS
# =========================

@app.route("/complaint/<int:complaint_id>", methods=["POST"])
def check_complaint(complaint_id):

    try:

        data = request.get_json(silent=True) or {}

        mobile = str(data.get("mobile", "")).strip()

        if not mobile:
            return jsonify({
                "success": False,
                "message": "Mobile number required hai."
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
                status
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
                "message": "Complaint ID ya mobile number galat hai."
            }), 404

        return jsonify({
            "success": True,
            "id": row["id"],
            "name": row["name"],
            "mobile": row["mobile"],
            "village": row["village"],
            "category": row["category"],
            "complaint": row["complaint"],
            "status": row["status"]
        })

    except Exception as e:

        print("Status Error:", e)

        return jsonify({
            "success": False,
            "message": "Status check nahi ho paya."
        }), 500


# =========================
# ADMIN - ALL COMPLAINTS
# =========================

@app.route("/complaints", methods=["GET"])
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
                status
            FROM complaints
            ORDER BY id DESC
        """)

        rows = cursor.fetchall()

        conn.close()

        complaints = []

        for row in rows:

            complaints.append({
                "id": row["id"],
                "name": row["name"],
                "mobile": row["mobile"],
                "village": row["village"],
                "category": row["category"],
                "complaint": row["complaint"],
                "photo": row["photo"],
                "video": row["video"],
                "status": row["status"]
            })

        return jsonify({
            "success": True,
            "complaints": complaints
        })

    except Exception as e:

        print("Admin Error:", e)

        return jsonify({
            "success": False,
            "message": "Complaints load nahi ho payi."
        }), 500


# =========================
# UPDATE COMPLAINT STATUS
# =========================

@app.route("/complaint/<int:complaint_id>/status", methods=["POST"])
def update_status(complaint_id):

    try:

        data = request.get_json(silent=True) or {}

        status = str(data.get("status", "")).strip()

        allowed_statuses = [
            "Pending",
            "In Progress",
            "Resolved"
        ]

        if status not in allowed_statuses:
            return jsonify({
                "success": False,
                "message": "Invalid status."
            }), 400

        conn = get_db()

        cursor = conn.execute("""
            UPDATE complaints
            SET status = ?
            WHERE id = ?
        """, (
            status,
            complaint_id
        ))

        conn.commit()

        changed = cursor.rowcount

        conn.close()

        if changed == 0:
            return jsonify({
                "success": False,
                "message": "Complaint nahi mili."
            }), 404

        return jsonify({
            "success": True,
            "message": "Status updated successfully.",
            "id": complaint_id,
            "status": status
        })

    except Exception as e:

        print("Update Status Error:", e)

        return jsonify({
            "success": False,
            "message": "Status update nahi ho paya."
        }), 500


# =========================
# MEDIA FILES
# =========================

@app.route("/media/<filename>")
def media(filename):

    return send_from_directory(
        app.config["UPLOAD_FOLDER"],
        filename
    )


# =========================
# RUN
# =========================

if __name__ == "__main__":

    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=True
    )