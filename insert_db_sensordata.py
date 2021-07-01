import pymysql

def insert_sensordata(id: int, co: float, pm10: float):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "INSERT INTO sensordata VALUES (%s,%s,%s)"
    val = (id,co,pm10)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "record inserted")

insert_sensordata(3,0.05,60)
