import pymysql
from database import check_rds_tables
from database import insert_rds
from database import update_rds

def rds_device():
    db = pymysql.connect(host='localhost',user= 'root',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    sql = "SELECT * FROM device"
    cur.execute(sql)
    row = cur.fetchall()

    for r in row:
        # 1이면 중복id  존재(기본키는 중복될 수 없다함) 
        if (check_rds_tables.check_device(r[0]) == 1): 
            # id가 이미 내부DB 테이블에 있으면 그 데이터를 update 
            update_rds.update_rds_device(r[0],r[1],r[2])
        else:
            # id가 테이블에 없으면 insert
            insert_rds.insert_rds_device(r[0],r[1],r[2])

def rds_location():
    db = pymysql.connect(host='localhost',user= 'root',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    sql = "SELECT * FROM location"
    cur.execute(sql)
    row = cur.fetchall()

    for r in row:
        print(r)
        # 1이면 중복id  존재(기본키는 중복될 수 없다함) 
        if (check_rds_tables.check_location(r[0]) == 1): 
            # id가 이미 내부DB 테이블에 있으면 그 데이터를 update 
            update_rds.update_rds_location(r[0],r[1],r[2], r[3])
        else:
            # id가 테이블에 없으면 insert
            insert_rds.insert_rds_location(r[0],r[1],r[2], r[3])

def rds_air_quality_sensor():
    db = pymysql.connect(host='localhost',user= 'root',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    sql = "SELECT geohash, device_id, AVG(co), AVG(pm10), AVG(pm25) FROM air_quality_sensor GROUP BY (geohash)"
    cur.execute(sql)
    row = cur.fetchall()

    for r in row:
        # 1이면 중복id  존재(기본키는 중복될 수 없다함) 
        if (check_rds_tables.check_air_quality(r[0]) == 1): 
            # id가 이미 내부DB 테이블에 있으면 그 데이터를 update 
            update_rds.update_rds_air_quality(r[0],r[1],r[2], r[3], r[4])
        else:
            # id가 테이블에 없으면 insert
            insert_rds.insert_rds_air_quality(r[0],r[1],r[2], r[3], r[4])

if __name__ == "__main__":
    rds_device()
    rds_location()
    rds_air_quality_sensor()