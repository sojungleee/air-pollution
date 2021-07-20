import pymysql

# connect to database
db = pymysql.connect(host='localhost', user='root', password='raspberry', 
db = 'mydb', charset='utf8')
cur = db.cursor()

# select
cur.execute("SELECT * FROM air_quality_sensor")

# print
rows = cur.fetchall()
for x in rows:
    print(x)

# close
db.close()
