import pm2008
import mq7
import time
import threading
from collections import defaultdict
from database import insert_raspdb

def collect_air_quality(data: defaultdict):
    pm2_5, pm10 = pm2008.pm2008()
    # co = co.co()

    data["pm2_5"] = pm2_5
    data["pm10"] = pm10
    # data['co'] = co

    # threading.Timer(1,collect(data)).start()
    # time.sleep(1)

    print(data)

if __name__ == "__main__":
    data = defaultdict()
    # id = 1
    ######### id 설정 필요 
    # t = threading.Thread(target = collect, args=(data,))
    # t.start()

    ######### 여기부터 
    collect_air_quality(data)
    #insert_raspdb.insert_raspdb_air_quality(id, data["co"], data["pm2_5"], data["pm10"])
    
    #collect_gps(gps_data)
    #insert_raspdb.indsert_gps~~~
    ######### 여기까지 1초에 한번씩 시행
    
