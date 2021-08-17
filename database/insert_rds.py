import pymysql

def insert_rds_air_quality(geohash: str, device_id: str, co: float, pm10: int, pm25: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "INSERT INTO air_quality_sensor(geohash,device_id,co,pm10,pm25) VALUES (%s, %s, %s, %s, %s)"
    val = (geohash, device_id, co, pm10, pm25)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "air_quality record inserted")
#
def insert_rds_device(device_id: str, network_condition: bool,timestamp: str):
    # RDS DB 연결
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    # 내부 DB 연결
    inner_db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    inner_cur = inner_db.cursor()

   # insert
    sql = "INSERT INTO device(device_id,network_condition,last_updated_time) VALUES (%s, %s, %s)"

    val = (device_id, network_condition, timestamp)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "device record inserted (rds)")
#

def insert_raspdb_location(geohash: str, latitude: float, longitude: float, timestamp: str):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO location(geohash, receive_time, latitude, longitude) VALUES (%s, %s, %s, %s)"
    val = (geohash, timestamp, latitude, longitude)
    cur.execute(sql, val)

    db.commit()

    print(f"RDS: {cur.rowcount} location record inserted")





