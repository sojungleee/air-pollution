from pymysql import DATETIME
import pm2008
import gps
import find_id
import time
import threading
from collections import defaultdict
from database import insert_raspdb
from database import check_tables
from database import update_raspdb
import datetime
import pygeohash as pgh
import checkConnect

# collect~ 함수 : 센서 값을 읽어와 딕셔너리형태로 저장
# defaultdict이 딕셔너리 역할 
# 딕셔너리에 저장된 센서값들을 라즈베리파이 내부 DB의 테이블로 각자 삽입 
# collect.py를 10초에 한번씩 실행 -> 리눅스 crontab 스케줄러 이용 

# 미세먼지센서, co 센서 
def collect_air_quality(air_data: defaultdict):
    pm25, pm10 = pm2008.pm2008()
    # co = co.co()
    co = 4.5

    air_data["pm25"] = pm25
    air_data["pm10"] = pm10
    air_data['co'] = co

    print(air_data)

# gps 센서 
def collect_gps():
    #lat, lon = gps.getGps()
    lat = 127.09318
    lon = 37.61633
    
    return pgh.encode(lat, lon, 7)
    
# 
if __name__ == "__main__":
    # 센서 값을 저장할 딕셔너리 생성 
    air_data = defaultdict()
    geohash = collect_gps()

    now = datetime.datetime.now()
    f = '%Y-%m-%d %H:%M:%S'
    timestamp = now.strftime(f) # air_quality_id
    
    ###### device 테이블 ###### 
    # device_id 설정 
    device_id = find_id.get_serial()
    ###### 네트워크 상태 측정 함수도 추가해야함
    network_condition = checkConnect.checkConnect()

    # 1이면 중복id  존재(기본키는 중복될 수 없다함) 
    if (check_tables.check_device(device_id) == 1): 
        # id가 이미 내부DB 테이블에 있으면 그 데이터를 update 
        update_raspdb.insert_raspdb_device(device_id,network_condition,timestamp)
    else:
        # id가 테이블에 없으면 insert
        insert_raspdb.insert_raspdb_device(device_id,network_condition,timestamp)

    ###### ait_quality_sensor 테이블 ######  
    collect_air_quality(air_data)
    # 라즈베리파이 내부 DB에 삽입 
    insert_raspdb.insert_raspdb_air_quality(timestamp, device_id,air_data["co"], air_data["pm10"],air_data["pm25"])
    
    ###### location 테이블 ######
    # 라즈베리파이 내부 DB에 삽입 
    insert_raspdb.insert_raspdb_location(geohash,timestamp)

