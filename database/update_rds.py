import pymysql

def insert_rds_air_quality(id: int, co: float, pm2_5: int, pm10: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE air_quality_sensor SET co=%s, pm2_5=%s, pm_10=%s WHERE id=%s"
    val = (id, co, pm2_5, pm10)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "record inserted")

if __name__ == "__main__":

# 라즈베리파이 내부 데이터베이스 테이블을 평균낸 값을 가져와 update 해야함
