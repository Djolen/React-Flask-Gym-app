
from flask import Flask, request
import pymysql
from flask_cors import CORS
from json import dumps



def convertBool(num):
    if num == True: 
        return "1" 
    else: 
        return "0" 

app = Flask(__name__) #ENABLING FLASK
CORS(app) #ENABLING CORS
db = pymysql.connect(host = "localhost",user = "root", password="", database="test") #DB CONNECTION

### INSERTING ORDER FROM FRONTEND

@app.route("/orders", methods = ['POST'])
def orders():

    #GETTING DATA FROM FRONTEND
    order = request.get_json()

    name = order['name']
    surname = order['surname']
    age = order['age']
    weight = order['weight']
    dp = order['dietplan']
    dp = convertBool(dp)
    tp = order['trainingplan']
    tp = convertBool(tp)
    con = order['consul']
    con = convertBool(con)

    try:
        cursor = db.cursor() 
        sql = """INSERT INTO orders(name,
                surname, age, weight, dietplan, trainingplan,consultationplan)
                VALUES (%s,%s,%s,%s,%s,%s,%s)""" 
        var = (name,surname,age,weight,dp,tp,con)
        cursor.execute(sql,var)
        db.commit()
    except: 
        return "Error: unable to insert data"

    return order

### SENDING ALL ORDERS 2 FRONTEND

@app.route("/recieveorders")
def recieveorders():

    cursor = db.cursor() 
    sql = "select * from orders"

    try:
        cursor.execute(sql)
        result = cursor.fetchall()
    except: 
        return "Error: unable to send data"

    return dumps(result)


### SENDING CONTACT VAR 2 FRONTEND

@app.route("/getcontact", methods = ['POST'])
def getcontacts(): 
    
    #RECIEVING ID FROM FRONTEND
    dataid = request.get_json()

    cursor = db.cursor() 
    sql = "select contact from test.orders where id = '%d' " % (dataid['datakey'])

    try:
        cursor.execute(sql)
        result = cursor.fetchall()
    except: 
        return "Error: unable to fetch data"


    return dumps(result) 


### DELETING FROM ORDER 

@app.route("/deleteorder", methods = ['POST'])
def deleteorder(): 

    #RECIEVING ID FROM FRONTEND
    dataid = request.get_json()

    cursor = db.cursor()
    sql = "delete from test.orders where id = '%d' " % (dataid['datakey'])
    
    try:
        cursor.execute(sql)
        db.commit()
    except: 
        return "Error: unable to delete data"

    return "SUCCESSFULLY REMOVED CANDIDATE"


if __name__ == "__main__": 
    app.run(debug=True)
