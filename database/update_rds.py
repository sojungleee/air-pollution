import pymysql

def update_rds_air_quality(geohash: str, device_id:str, co: float, pm2_5: int, pm10: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE air_quality_sensor SET device_id=%s, co=%s, pm25=%s, pm10=%s WHERE geohash=%s"
    val = (device_id, co, pm2_5, pm10, geohash)
    cur.execute(sql,val)

    db.commit()

    print(f"RDS: {cur.rowcount} air_quality record updated")

def update_rds_location(geohash: str, timestamp, latitude: float, longitude: float):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE location SET receive_time=%s, latitude=%s, longitude=%s WHERE geohash=%s"
    val = (timestamp, latitude, longitude, geohash)
    cur.execute(sql,val)

    db.commit()

    print(f"RDS: {cur.rowcount} gps record updated")

def update_rds_device(id: str, network_condition: bool, timestamp: str):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE device SET network_condition=%s, last_updated_time=%s WHERE device_id=%s"
    val = (network_condition,timestamp, id)
    cur.execute(sql,val)

    db.commit()

    print(f"RDS: {cur.rowcount} device record updated")
