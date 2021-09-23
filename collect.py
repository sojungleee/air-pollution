from pygeohash import geohash
from pymysql import DATETIME
import ozone
import pm2008
import mq7
import gps
import find_id
import time
import threading
from collections import defaultdict
from database import insert_raspdb
from database import check_raspdb_tables
from database import update_raspdb
import datetime
import pygeohash as pgh
import checkConnect
import lcd

# collect~ 함수 : 센서 값을 읽어와 딕셔너리형태로 저장
# defaultdict이 딕셔너리 역할 
# 딕셔너리에 저장된 센서값들을 라즈베리파이 내부 DB의 테이블로 각자 삽입 
# collect.py를 10초에 한번씩 실행 -> 리눅스 crontab 스케줄러 이용 

# 미세먼지센서, co 센서, ozone 센서
def collect_air_quality(air_data: defaultdict):
    ozone = ozone.ozone()
    pm25, pm10 = pm2008.pm2008()
    co = mq7.mq7()
    
    air_data["ozone"] = ozone
    air_data["pm25"] = pm25
    air_data["pm10"] = pm10
    air_data['co'] = co

    print(air_data)

# gps 센서 
def collect_gps(gps_data: defaultdict):
    #lat, lon = gps.getGps()
    lat = 127.04151
    lon = 37.60292
    gps_data["lat"] = lat
    gps_data["lon"] = lon
    gps_data["geohash"] = pgh.encode(lat, lon, 7)

    print(gps_data)
    
# 
if __name__ == "__main__":
    # 센서 값을 저장할 딕셔너리 생성 
    air_data = defaultdict()
    gps_data = defaultdict()

    collect_air_quality(air_data)
    collect_gps(gps_data)

    #------------------------- lcd print ----------------------------#
    lcd.print_sensor_data(air_data)

    now = datetime.datetime.now()
    f = '%Y-%m-%d %H:%M:%S'
    timestamp = now.strftime(f) 
    
    #------------------------- device 테이블 -------------------------# 
    # device_id 설정 
    device_id = find_id.get_serial()
    # 네트워크 상태 측정
    network_condition = checkConnect.checkConnect()

    # 1이면 중복id  존재(기본키는 중복될 수 없다함) 
    if (check_raspdb_tables.check_device(device_id) == 1): 
        # id가 이미 내부DB 테이블에 있으면 그 데이터를 update 
        update_raspdb.update_raspdb_device(device_id,network_condition,timestamp)
    else:
        # id가 테이블에 없으면 insert
        insert_raspdb.insert_raspdb_device(device_id,network_condition,timestamp)

    #------------------------- location 테이블 -------------------------# 

    # 1이면 중복 geohash존재
    if (check_raspdb_tables.check_location(gps_data["geohash"]) == 1): 
        # geohahs가 이미 내부DB 테이블에 있으면 그 데이터를 update 
        update_raspdb.update_raspdb_location(gps_data["geohash"], gps_data["lat"], gps_data["lon"], timestamp)
    else:
        # id가 테이블에 없으면 insert
        insert_raspdb.insert_raspdb_location(gps_data["geohash"], gps_data["lat"], gps_data["lon"], timestamp)

    #------------------------- air_quality_sensor 테이블 -------------------------#  
    # 라즈베리파이 내부 DB에 삽입 
    insert_raspdb.insert_raspdb_air_quality(gps_data["geohash"], device_id,air_data["ozone"],air_data["co"], air_data["pm10"],air_data["pm25"],timestamp)
    

