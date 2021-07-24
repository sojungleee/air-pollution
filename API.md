# Dust Navigation Open API

## 디바이스별 정보 API

디바이스별로 모든 정보를 가져오는 API 입니다.

```
GET "url"
```



### 응답 item

- id : 디바이스 아이디
- network_condition : 통신 품질
- last_updated_time : 마지막 업데이트 시간
- sensors
  - gps
    - device_id : 디바이스 아이디
    - latitude : 위도
    - longitude : 경도
  - air_quality_sensor
    - device_id :
    - co : 일산화탄소 농도
    - pm10 :  미세먼지 농도
    - pm2_5 : 초미세먼지 농도



### response 200 예

```json
{	
    device : [
        {
        "id" : "12345",
    	"network_condition" : "~~",
    	"last_updated_time" : "~~",
        "sensors" : {
            "gps" : {
                "device_id" : "~~",
                "latitude" : "~~",
                "longitude" : "~~"
            },
            "air_quality_sensor" : {
                "device_id" : "~~",
                "co" : "~~",
                "pm10" : "~~",
                "pm2_5" : "~~"
            }
        }
    }
    ],
    [
    ...
    ]
    ...
}
```