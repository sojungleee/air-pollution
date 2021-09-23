import pymysql

def get_avg():
    #connect to database
    db = pymysql.connect(host='localhost', user='root', password='raspberry', 
    db = 'raspdb', charset='utf8')
    cur = db.cursor()

    # insert
    sql = "SELECT geohash, MAX(receive_time), AVG(ozone), AVG(co), AVG(pm10), AVG(pm25) FROM air_quality_sensor GROUP BY (geohash)"
    cur.execute(sql)
    row = cur.fetchall()

    for r in row: print(r)

get_avg()