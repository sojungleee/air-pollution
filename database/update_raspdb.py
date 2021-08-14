import pymysql

def insert_raspdb_air_quality(id: str, co: float, pm2_5: int, pm10: int, air_index: int):
    #connect to database
    db = pymysql.connect(host='localhost',user= 'root',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE air_quality_sensor SET co=%s, pm25=%s, pm10=%s, air_index=%s WHERE device_id=%s"
    val = (co, pm2_5, pm10,air_index,id)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "air_quality record updated")

def insert_raspdb_gps(id: str, latitude: int, longtitude: int):
    #connect to database
    db = pymysql.connect(host='localhost',user= 'root',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE gps SET latitude=%s, longtitude=%s WHERE device_id=%s"
    val = (latitude, longtitude, id)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "gps record updatted")

def insert_raspdb_device(id: str, network_condition: bool, timestamp: str):
    #connect to database
    db = pymysql.connect(host='localhost',user= 'root',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE device SET network_condition=%s, last_updated_time=%s WHERE device_id=%s"
    val = (network_condition,timestamp, id)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "device record updatted")




