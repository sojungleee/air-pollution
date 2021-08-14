import pymysql

def insert_raspdb_device(device_id: str, network_condition: bool,timestamp: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO device(device_id,network_condition,last_updated_time) VALUES (%s, %s, %s)"

    val = (device_id, network_condition, timestamp)
    cur.execute(sql, val)

    db.commit()
    
    print(cur.rowcount, "device row inserted")

#

def insert_raspdb_gps(gps_id: str, latitude: float, longitude: float):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO gps(gps_id, latitude, longitude) VALUES (%s, %s, %s)"

    val = (gps_id, latitude, longitude)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "gps record inserted")

#

def insert_raspdb_air_quality(air_quality_id: str, device_id: str, co: float, pm10: int, pm25: int):
    # connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO air_quality_sensor(air_quality_id,device_id,co,pm10,pm25) VALUES (%s, %s, %s, %s, %s)"
    val = (air_quality_id, device_id, co, pm10, pm25)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "air_quality record inserted")

#

def insert_raspdb_sensors(sensor_id: int, air_quality_id: str, gps_id: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO sensors(sensor_id, air_quality_id, gps_id) VALUES (%s, %s, %s)"

    val = (sensor_id, air_quality_id, gps_id)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "sensors record inserted")

#

def insert_raspdb_geohash(geohash: str, sensor_id: int, address: str):
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

# examples
#insert_raspdb_device("id456", 1)
#insert_raspdb_gps(127.0612, 37.4238)
#insert_raspdb_air_quality(2, "id456", 10.0, 10, 25)
#insert_raspdb_sensors(2, 2)
#insert_raspdb_geohash("hash2", 2, "seoul")
