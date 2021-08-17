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

def insert_raspdb_air_quality(geohash: str, device_id: str, co: float, pm10: int, pm25: int):
    # connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # 행 수가 5개면 가장 오래된 값 하나 버림
    sql = "SELECT COUNT(*) FROM air_quality_sensor"
    cur.execute(sql)
    row_count = int(cur.fetchone()[0])

    print(row_count)

    if row_count == 5:
        sql = "delete from air_quality_sensor order by recieve_time asc limit 1;"
        cur.execute(sql)
        print("oldest data deleted from air_quality_seonsor")

    # insert
    sql = "INSERT INTO air_quality_sensor(geohash,device_id,co,pm10,pm25) VALUES (%s, %s, %s, %s, %s)"
    val = (geohash, device_id, co, pm10, pm25)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "air_quality record inserted")

#

def insert_raspdb_location(geohash: str, latitude: float, longitude: float, timestamp: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO location(geohash, recieve_time, latitude, longitude) VALUES (%s, %s, %s, %s)"
    val = (geohash, timestamp, latitude, longitude)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "location record inserted")

# examples
#insert_raspdb_device("id456", 1)
#insert_raspdb_gps(127.0612, 37.4238)
#insert_raspdb_air_quality(2, "id456", 10.0, 10, 25)
#insert_raspdb_sensors(2, 2)
#insert_raspdb_geohash("hash2", 2, "seoul")
