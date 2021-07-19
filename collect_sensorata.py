import pm2008
import time
import threading

def collect():
    dict = pm2008.pm2008()
    print(dict)
    
    threading.Timer(1,collect).start()

    return dict 
collect()
