from flask import Flask, render_template, request, redirect, url_for
import pyodbc
import os

app = Flask(__name__, template_folder=os.getcwd(), static_folder=os.getcwd())  # Using the current directory

# SQL Server connection string
conn_str = 'Driver={ODBC Driver 18 for SQL Server};Server=tcp:facetracker-server.database.windows.net,1433;Database=facetracker-database;Uid=facetracker;Pwd=@dmin123;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'

# Route for login page
@app.route('/')
def index():
    return render_template('index.html')  # No need for 'templates/' folder anymore

# Route for handling login form submission
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Connect to the database and check credentials
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
        user = cursor.fetchone()
        
        if user:
            return redirect(url_for('dashboard'))
        else:
            return "Invalid credentials, please try again."
    return render_template('index.html')  # For GET requests, render the login form


# Route for the dashboard (after successful login)
@app.route('/dashboard')
def dashboard():
    return "Welcome to the dashboard!"

if __name__ == '__main__':
    app.run(debug=True)
