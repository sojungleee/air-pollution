import os
import fcntl
import time

<<<<<<< pm2008.py
def pm2008():
    I2C_SLAVE = 0x703
    PM2008 = 0x28

    fd = os.open('/dev/i2c-1',os.O_RDWR)
    if fd < 0 :
        print("Failed to open the i2c bus\n")
    io = fcntl.ioctl(fd,I2C_SLAVE,PM2008)
    if io < 0 :
        print("Failed to acquire bus access/or talk to salve\n")

    data = os.read(fd,32)
    pm2_5 = 256*int(data[9])+int(data[10])
    pm10 = 256*int(data[11])+int(data[12])


    return {'pm2_5':pm2_5,'pm10':pm10}    

