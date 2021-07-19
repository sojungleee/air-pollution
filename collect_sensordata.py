import pm2008
import time
import threading
from collections import defaultdict

def collect(data: defaultdict):
    pm2_5, pm10 = pm2008.pm2008()

    data["pm2_5"] = pm2_5
    data["pm10"] = pm10

    # threading.Timer(1,collect(data)).start()
    # time.sleep(1)

    print(data)
    return data

if __name__ == "__main__":
    data = defaultdict()
    # t = threading.Thread(target = collect, args=(data,))
    # t.start()
    # 스레드 관리는 sql문 update할때 collect()함수 부르는걸
    # 무한으로 돌려야 할듯
    collect(data)