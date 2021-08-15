import pymysql

# connect to database
db = pymysql.connect(host='localhost', user='root', password='raspberry', 
db = 'raspdb', charset='utf8')
cur = db.cursor()

# select
cur.execute("SELECT * FROM device")
# print
print("device: ")
rows = cur.fetchall()
for x in rows:
    print(x)

# select
cur.execute("SELECT * FROM air_quality_sensor")
# print
print("air_quality_sensor: ")
rows = cur.fetchall()
for x in rows:
    print(x)


# select
cur.execute("SELECT * FROM geohash")
# print
print("geohash: ")
rows = cur.fetchall()
for x in rows:
    print(x)

# close
db.close()
