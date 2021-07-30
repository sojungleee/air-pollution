import pm2008
import gps
import find_id
import time
import threading
from collections import defaultdict
from database import insert_raspdb
from database import check_tables
from database import update_raspdb

# collect~ 함수 : 센서 값을 읽어와 딕셔너리형태로 저장
# defaultdict이 딕셔너리 역할 
# 딕셔너리에 저장된 센서값들을 라즈베리파이 내부 DB의 테이블로 각자 삽입 
# collect.py를 10초에 한번씩 실행 -> 리눅스 crontab 스케줄러 이용 

# 미세먼지센서, co 센서 
def collect_air_quality(data: defaultdict):
    pm2_5, pm10 = pm2008.pm2008()
    # co = co.co()
    co = 4.5

    data["pm2_5"] = pm2_5
    data["pm10"] = pm10
    data['co'] = co
    ###### air_index 계산하는 함수도 추가해야함 
    data['air_index'] = 10 

    print(data)

# gps 센서 
def collect_gps(gps_data: defaultdict):
    lat, lon = gps.getGps()
    gps_data["lat"] = lat
    gps_data["lon"] = lon
    
    print(gps_data)

if __name__ == "__main__":
    # 센서 값을 저장할 딕셔너리 생성 
    data = defaultdict()
    gps_data = defaultdict()

    ###### device 테이블 ###### 
    # id 설정 
    id = find_id.get_serial()
    ###### 네트워크 상태 측정 함수도 추가해야함
    network_condition = True 

    # 1이면 중복id  존재(기본키는 중복될 수 없다함) 
    if (check_tables.check_device(id) == 1): 
        # id가 이미 내부DB 테이블에 있으면 그 데이터를 update 
        update_raspdb.insert_raspdb_device(id,network_condition)
    else:
        # id가 테이블에 없으면 insert
        insert_raspdb.insert_raspdb_device(id,network_condition)

    ###### ait_quality_sensor 테이블 ######  
    collect_air_quality(data)
    # 라즈베리파이 내부 DB에 삽입 
    insert_raspdb.insert_raspdb_air_quality(id, data["co"], data["pm2_5"], data["pm10"],data["air_index"])
    
    ###### gps 테이블 ######
    collect_gps(gps_data)
    # 라즈베리파이 내부 DB에 삽입
    insert_raspdb.insert_raspdb_gps(id,gps_data["lat"],gps_data["lon"])
    
