import pymysql

def insert_rds_air_quality(air_quality_id: str, device_id: str, co: float, pm10: int, pm25: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "INSERT INTO air_quality_sensor(air_quality_id,device_id,co,pm10,pm25) VALUES (%s, %s, %s, %s, %s)"
    val = (air_quality_id, device_id, co, pm10, pm25)
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

def insert_raspdb_location(geohash: str, air_quality_id: str):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO geohash(geohash, air_quality_id) VALUES (%s, %s)"
    val = (geohash, air_quality_id)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "location record inserted")





