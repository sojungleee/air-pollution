import pymysql

def check_device(device_id: str):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    # insert
    sql = "SELECT EXISTS(SELECT * FROM device WHERE device_id = %s) "
    val = (device_id)
    cur.execute(sql, val)

    isDuplicate = cur.fetchone()[0]
    return isDuplicate
    
def check_location(geohash: str):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    # insert
    sql = "SELECT EXISTS(SELECT * FROM location WHERE geohash = %s) "
    val = (geohash)
    cur.execute(sql, val)

    isDuplicate = cur.fetchone()[0]
    return isDuplicate

def check_air_quality(geohash: str):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='raspdb',charset='utf8')
    cur = db.cursor()

    # insert
    sql = "SELECT EXISTS(SELECT * FROM air_quality_sensor WHERE geohash = %s) "
    val = (geohash)
    cur.execute(sql, val)

    isDuplicate = cur.fetchone()[0]
    return isDuplicate
