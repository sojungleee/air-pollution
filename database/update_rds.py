import pymysql

def insert_rds_air_quality(id: int, co: float, pm2_5: int, pm10: int, air_index: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE air_quality_sensor SET co=%s, pm2_5=%s, pm_10=%s, air_index=%s WHERE id=%s"
    val = (co, pm2_5, pm10,air_index,id)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "air_quality record updated")

def insert_rds_gps(id: int, latitude: int, longtitude: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE gps SET latitude=%s, longtitude=%s WHERE id=%s"
    val = (latitude, longtitude, id)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "gps record updatted")

def insert_rds_device(id: int, network_condition: int):
    #connect to database
    db = pymysql.connect(host='hanium.c1hdrrzsdvm2.ap-northeast-2.rds.amazonaws.com',user= 'admin',password='raspberry',db='mydb',charset='utf8')
    cur = db.cursor()

    #insert
    sql = "UPDATE device SET network_condition=%s WHERE id=%s"
    val = (network_condition,id)
    cur.execute(sql,val)

    db.commit()

    print(cur.rowcount, "device record updatted")


if __name__ == "__main__":

# 라즈베리파이 내부 데이터베이스 테이블을 평균낸 값을 가져와 update 해야함
