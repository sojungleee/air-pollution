import pymysql

#

def insert_raspdb_device(id: str, network_condition: bool):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO device(id,network_condition) VALUES (%s, %s)"

    val = (id, network_condition)
    cur.execute(sql, val)

    db.commit()
    
    print(cur.rowcount, "device row inserted")

#

def insert_raspdb_gps(geohash: str, latitude: int, longitude: int):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO gps(geohash, latitude, longitude) VALUES (%s, %s, %s)"

    val = (geohash, latitude, longitude)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "gps record inserted")

#

def insert_raspdb_air_quality(air_quality_id: str, device_id: str, co: float, pm10: int, pm2_5: int):
    # connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO air_quality_sensor VALUES (%s, %s, %s, %s, %s)"
    val = (air_quality_id, device_id, co, pm10, pm2_5)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "air_quality record inserted")

#

def insert_raspdb_sensors(sensor_id: str, air_quality_id: str, geohash: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO sensors(sensor_id, air_quality_id, geohash) VALUES (%s, %s, %s)"

    val = (sensor_id, air_quality_id, geohash)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "sensors record inserted")

#

def insert_raspdb_geohash(geohash: str, sensor_id: str, address: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO geohash VALUES (%s, %s, %s)"

    val = (geohash, sensor_id, address)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "geohash record inserted")
