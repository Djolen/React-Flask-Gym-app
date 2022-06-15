
from flask import Flask, request
import pymysql
from flask_cors import CORS, cross_origin



def convertBool(num):
    if num == True: 
        return "1" 
    else: 
        return "0" 

app = Flask(__name__)
CORS(app)
db = pymysql.connect(host = "localhost",user = "root", password="", database="test")

@app.route("/orders", methods = ['POST'])
def orders():
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

    cursor = db.cursor() 
    sql = """INSERT INTO orders(name,
            surname, age, weight, dietplan, trainingplan,consultationplan)
            VALUES (%s,%s,%s,%s,%s,%s,%s)""" 
    var = (name,surname,age,weight,dp,tp,con)
    cursor.execute(sql,var)
    db.commit()

    return order


if __name__ == "__main__": 
    app.run(debug=True)
