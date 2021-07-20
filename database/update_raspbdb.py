import pymysql

def insert_raspbdb_air_quality(id: int, co: float, pm2_5:int, pm10: int) :
    # connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'mydb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "UPDATE sensordata SET co=%s, pm2_5=%s, pm_10=%s WHERE id=%s"
    val = (co, pm2_5, pm10, id)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "record updated")

# 만들어 놓기는 했는데 필요 없을 것 같음.