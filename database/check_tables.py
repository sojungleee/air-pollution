import pymysql

def check_air_quality(id: str) :
    # connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'mydb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "SELECT EXISTS(SELECT * FROM air_quality_sensor WHERE device_id = %s) "
    val = (id)
    cur.execute(sql, val)

    isDuplicate = cur.fetchone()[0]
    return isDuplicate

def check_gps(id: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'mydb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "SELECT EXISTS(SELECT * FROM gps WHERE device_id = %s) "
    val = (id)
    cur.execute(sql, val)

    isDuplicate = cur.fetchone()[0]
    return isDuplicate


def check_device(id: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'mydb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "SELECT EXISTS(SELECT * FROM device WHERE id = %s) "
    val = (id)
    cur.execute(sql, val)

    isDuplicate = cur.fetchone()[0]
    return isDuplicate
    



