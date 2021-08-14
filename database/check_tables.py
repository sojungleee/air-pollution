import pymysql

def check_device(device_id: str):
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "SELECT EXISTS(SELECT * FROM device WHERE device_id = %s) "
    val = (device_id)
    cur.execute(sql, val)

    isDuplicate = cur.fetchone()[0]
    return isDuplicate
    



