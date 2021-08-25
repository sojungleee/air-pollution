import drivers
from time import sleep

# data가 {'co2':0.01, ...} 과 같은 딕셔너리 형태로
# 구성되어 있다고 가정함
# 한줄씩 출력

def print_sensor_data(data: dict):

    display = drivers.Lcd()
    air_data = {} 
    air_data["pm10"] = data["pm10"]
    air_data["pm2.5"] = data["pm25"]
    air_data["co"] = data["co"]
    print(air_data)
    try:
        
        line_num = 1 
        print("print sensor data...")

        for key,value in air_data.items():
            value = str(value)
            display.lcd_display_string('{0:16}'.format(key + ":" + value),line_num)
            
            line_num +=1
            sleep(1.5)

            if line_num ==3 :
                line_num = 1
    except KeyboardInterrupt:
        display.lcd_clear()
