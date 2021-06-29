import pymysql

def insert_sensordata(id: int, co: float, pm10: float) :
    # connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'mydb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO sensordata VALUES (%s, %s, %s)"
    val = (id, co, pm10)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "record inserted")