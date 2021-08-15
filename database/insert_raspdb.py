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

def insert_raspdb_location(geohash: str, air_quality_id: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO geohash(geohash, air_quality_id) VALUES (%s, %s)"
    val = (geohash, air_quality_id)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "location record inserted")

# examples
#insert_raspdb_device("id456", 1)
#insert_raspdb_gps(127.0612, 37.4238)
#insert_raspdb_air_quality(2, "id456", 10.0, 10, 25)
#insert_raspdb_sensors(2, 2)
#insert_raspdb_geohash("hash2", 2, "seoul")
