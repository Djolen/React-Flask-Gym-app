
from flask import Flask 
from flaskext.mysql import MySQL

app = Flask(__name__)

db = MySQL()


@app.route("/orders")
def orders():
    return {"orders": ["order1", "order2"]} 

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'test'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

db.init_app(app) 

conn = db.connect() 
cursor = conn.cursor() 



if __name__ == "__main__": 
    app.run(debug=True)
