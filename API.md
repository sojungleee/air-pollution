# Dust Navigation Open API

## 모든 지역 대기 정보 API

```
GET "/api/locations"
```

### 응답 item

- geohash : geohash값
- latitude : 위도
- longitude : 경도
- receive_time : 응답 시간 (마지막 측정 시간)
- airQualitySensor : 대기정보
    - geohash : geohash값
    - device_id : 라즈베리파이 device id
    - co : 일산화탄소 측정값
    - pm10 : 미세먼지 측정값
    - pm25 : 초미세먼지 측정값
...

### response 200

```json
{
  "List": [
    {
      "geohash": "uzfxcpu",
      "latitude": 127.093,
      "longitude": 37.3163,
      "receive_time": "2021-08-17T08:53:32.000+00:00",
      "airQualitySensor": {
        "geohash": "uzfxcpu",
        "device_id": "b958bee8",
        "co": 4,
        "pm10": 4,
        "pm25": 4
      }
    },
    {
      "geohash": "uzfxzxv",
      "latitude": 127.042,
      "longitude": 37.6029,
      "receive_time": "2021-08-18T15:37:02.000+00:00",
      "airQualitySensor": {
        "geohash": "uzfxzxv",
        "device_id": "a9148db7",
        "co": 3,
        "pm10": 1,
        "pm25": 1
      }
    },
    {
      "geohash": "uzfxzzz",
      "latitude": 127.093,
      "longitude": 37.6163,
      "receive_time": "2021-08-17T08:52:42.000+00:00",
      "airQualitySensor": {
        "geohash": "uzfxzzz",
        "device_id": "b958bee8",
        "co": 4,
        "pm10": 4,
        "pm25": 4
      }
    },
    {
      "geohash": "wydmfyj",
      "latitude": 127.043,
      "longitude": 37.6062,
      "receive_time": null,
      "airQualitySensor": {
        "geohash": "wydmfyj",
        "device_id": "a9148db7",
        "co": 15,
        "pm10": 6,
        "pm25": 6
      }
    }
  ]
}
```

## 선택 지역 대기 정보 API

```
GET "/api/locations/{geohash}"
```

### 응답 item

- geohash : geohash값
- latitude : 위도
- longitude : 경도
- receive_time : 응답 시간 (마지막 측정 시간)
- airQualitySensor : 대기정보
    - geohash : geohash값
    - device_id : 라즈베리파이 device id
    - co : 일산화탄소 측정값
    - pm10 : 미세먼지 측정값
    - pm25 : 초미세먼지 측정값
...

### response 200 / 값이 있을 때

```json
{
  "Location": {
    "geohash": "uzfxzzz",
    "latitude": 127.093,
    "longitude": 37.6163,
    "receive_time": "2021-08-17T08:52:42.000+00:00",
    "airQualitySensor": {
      "geohash": "uzfxzzz",
      "device_id": "b958bee8",
      "co": 4,
      "pm10": 4,
      "pm25": 4
    }
  }
}
```

### response 200 / 값이 없을 때
```
The response contains no body.
```

## 모든 대기 정보 API
위도, 경도, 응답시간 미포함. 대기정보만 불러옴

```
GET "/api/airqualitysensors"
```

### 응답 item

- airQualitySensor : 대기정보
    - geohash : geohash값
    - device_id : 라즈베리파이 device id
    - co : 일산화탄소 측정값
    - pm10 : 미세먼지 측정값
    - pm25 : 초미세먼지 측정값
...

### response 200

```json
{
  "List": [
    {
      "geohash": "uzfxcpu",
      "device_id": "b958bee8",
      "co": 4,
      "pm10": 4,
      "pm25": 4
    },
    {
      "geohash": "wydmfvt",
      "device_id": "a9148db7",
      "co": 13,
      "pm10": 5,
      "pm25": 7
    },
    {
      "geohash": "wydmfyj",
      "device_id": "a9148db7",
      "co": 15,
      "pm10": 6,
      "pm25": 6
    }
  ]
}
```