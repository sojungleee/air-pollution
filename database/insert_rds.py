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
def insert_rds_device(device_id: str, network_condition: bool):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "INSERT INTO device VALUES (%s, %s)"
    val = (id, network_condition)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "device record inserted")
#

def insert_raspdb_location(geohash: str,  latitude: float, longitude: float):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO geohash(geohash, latitude, longitude) VALUES (%s, %s, %s)"
    val = (geohash, latitude, longitude)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "location record inserted")





