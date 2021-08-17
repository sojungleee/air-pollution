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

    # geohash 별로 구분했을 때 행 수가 5 이상인 geohash select
    sql = "SELECT geohash FROM air_quality_sensor GROUP BY (geohash) HAVING COUNT(*) >= 5"
    cur.execute(sql)

    row = cur.fetchall()

    # 현재 geohash가 결과인 row에 존재하면 오래된 값 삭제
    if row:
        if geohash in [r[0] for r in row]:
            print(f"data over 5 in {geohash} ... try delete")
            sql = "DELETE FROM air_quality_sensor WHERE geohash = %s AND receive_time in (SELECT min(receive_time) FROM air_quality_sensor GROUP BY (geohash))"
            val = (geohash)
            cur.execute(sql,val)
            print(f"oldest data in {geohash} deleted.")
        else:
            print(f"data under 5 in {geohash}")

    # insert
    sql = "INSERT INTO air_quality_sensor(geohash,device_id,co,pm10,pm25) VALUES (%s, %s, %s, %s, %s)"
    val = (geohash, device_id, co, pm10, pm25)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "air_quality record inserted")


def insert_raspdb_location(geohash: str, latitude: float, longitude: float, timestamp: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO location(geohash, receive_time, latitude, longitude) VALUES (%s, %s, %s, %s)"
    val = (geohash, timestamp, latitude, longitude)
    cur.execute(sql, val)

    db.commit()

    print(f"raspDB: {cur.rowcount} location record inserted")

# examples
#insert_raspdb_device("id456", 1)
#insert_raspdb_gps(127.0612, 37.4238)
#insert_raspdb_air_quality(2, "id456", 10.0, 10, 25)
#insert_raspdb_sensors(2, 2)
#insert_raspdb_geohash("hash2", 2, "seoul")
