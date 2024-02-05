from flask import Flask, render_template, request, make_response, redirect, session
import time
app = Flask(__name__)
app.secret_key = 'asdf0192958'

@app.route('/')
def index():
    return render_template('./index.html')

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5001, debug=True)