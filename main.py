from flask import Flask, render_template, request

app = Flask(__name__)
user = "username"


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        print(request.form["username"])
    ls = ["test1", "test2", "test3"]
    return render_template("index.html", ls=ls)


@app.route("/login")
def login():
    return "login"


@app.route("/news/<n>")
def news(n):
    return "news" + str(n)


app.run(debug=True)
