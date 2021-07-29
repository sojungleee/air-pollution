import pymysql

def insert_rds_air_quality(id: str, co: float, pm2_5: int, pm10: int, air_index: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "INSERT INTO air_quality_sensor VALUES (%s, %s, %s, %s, %s)"
    val = (id, co, pm2_5, pm10,air_index)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "air_quality record inserted")

def insert_rds_gps(id: str, latitude: int, longtitude: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "INSERT INTO gps VALUES (%s, %s, %s)"
    val = (id, latitude, longtitude)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "gps record inserted")

def insert_rds_device(id: str, network_condition: bool):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "INSERT INTO device VALUES (%s, %s)"
    val = (id, network_condition)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "device record inserted")






