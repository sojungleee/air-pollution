import pymysql

def insert_rds_air_quality(id: int, co: float, pm2_5: int, pm10: int, air_index: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "INSERT INTO air_quality_sensor VALUES (%s, %s, %s, %s, %s)"
    val = (id, co, pm2_5, pm10,air_index)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "record inserted")

