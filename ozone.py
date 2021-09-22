import spidev
import time

spi = spidev.SpiDev()
spi.open(0,0)
spi.max_speed_hz=500000

def ozone(adcChannel = 1):
	adcValue = 0
	try:
		buff = spi.xfer2([1, (8+adcChannel)<<4, 0])
		adcValue = ((buff[1]&3)<<8)+buff[2]
	except KeyboardInterrupt:
		spi.close()
	return adcValue*0.004882814
print(ozone())
