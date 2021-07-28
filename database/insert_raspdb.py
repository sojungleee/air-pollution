import pymysql

def insert_raspdb_air_quality(id: int, co: float, pm2_5: int, pm10: int,air_index: int) :
    # connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'mydb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "INSERT INTO air_quality_sensor VALUES (%s, %s, %s, %s, %s)"
    val = (id, co, pm2_5, pm10, air_index)
    cur.execute(sql, val)

    db.commit()

    print(cur.rowcount, "record inserted")

## 여기서 collect 함수 불러서 insert_raspdb_air_quality 인자로 넣어줘야 함
