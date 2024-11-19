from flask import Flask, request, jsonify, render_template
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.config["UPLOAD_FOLDER"]= "uploads"
os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
@app.route("/upload", methods=["GET", "POST"])
def upload():
    name = request.form.get("name")
    age = request.form.get("age")
    file = request.files.get("file")

    if not name or not age or not file:
        return jsonify({"message": "All fields are required!"}), 400

    # Save the uploaded file
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))

    return jsonify({"message": "Data submitted successfully!", "filename": filename})


@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)