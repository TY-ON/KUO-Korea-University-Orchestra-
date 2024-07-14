from flask import Flask, render_template, request, make_response, redirect, session
import time
app = Flask(__name__)
app.secret_key = 'asdf0192958'

@app.route('/')
def index():
    return render_template('./index.html')

@app.route('/introduction')
def introduction():
    return render_template('./introduction.html')

@app.route('/consert')
def consert():
    return render_template('./consert.html')
    
@app.route('/operation') # 운영진
def operation():
    return render_template('./operation.html')
    
# 교우회
# menubar 클릭시 바로 redirection
    
@app.route('/support')
def support():
    return render_template('./support.html')

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5001, debug=True)