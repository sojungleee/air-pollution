import pymysql

def insert_raspdb_air_quality(id: int, co: float, pm2_5: int, pm10: int,air_index: int) :
    # connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'mydb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO air_quality_sensor VALUES (%s, %s, %s, %s, %s)"
    val = (id, co, pm2_5, pm10, air_index)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "air_quality record inserted")

def insert_raspdb_gps(id: int, latitude: int, longtitude: int):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'mydb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO gps VALUES (%s, %s, %s)"

    val = (id, latitude, longtitude)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "gps record inserted")

def insert_raspdb_device(id: int, network_condition: int):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'mydb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO device VALUES (%s, %s)"

    val = (id, network_condition)
    cur.execute(sql, val)

    db.commit()
    
    print(cur.rowcount, "device row inserted")


