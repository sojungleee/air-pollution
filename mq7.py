import RPi.GPIO as GPIO
import time
 
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.IN)
GPIO.setup(27, GPIO.OUT)
 
try:
    while True:
        if GPIO.input(18):
         print("Pas de detection")
         time.sleep(0.2)
        if GPIO.input(18)!=1:
         print("Detection de GAS")
         GPIO.output(27, False)
         time.sleep(0.1)
         GPIO.output(27, True)

except KeyboardInterrupt:
    GPIO.cleanup()