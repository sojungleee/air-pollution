# Dust Navigation Open API

## 목차

- [Dust Navigation Open API](#dust-navigation-open-api)
  * [모든 지역 대기 정보 API](#모든-지역-대기-정보-api)
    + [응답 item](#응답-item)
    + [response 200](#response-200)
  * [선택 지역 대기 정보 API](#선택-지역-대기-정보-api)
    + [응답 item](#응답-item-1)
    + [response 200 / 값이 있을 때](#response-200-/-값이-있을-때)
    + [response 200 / 값이 없을 때](#response-200-/-값이-없을-때)
  * [모든 대기 정보 API](#모든-대기-정보-api)
    + [응답 item](#응답-item-2)
    + [response 200](#response-200-1)
  * [대기정보 정렬-필터링 API](#대기정보-정렬-필터링-api)
    + [응답 item](#응답-item-3)
    + [response 200](#response-200-2)
  * [리버스 지오코딩 API](#리버스-지오코딩-api)
    + [응답 item](#응답-item-4)
    + [response 200](#response-200-3)

## 모든 지역 대기 정보 API

```
GET /api/locations
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
[
  {
    "geohash": "uzfxcpu",
    "latitude": 127.093,
    "longitude": 37.3163,
    "receive_time": "2021-08-17T08:53:32.000+00:00",
    "airQualitySensor": {
      "geohash": "uzfxcpu",
      "device_id": "b958bee8",
      "co": 4.0,
      "pm10": 4.0,
      "pm25": 4.0
    }
  },
  {
    "geohash": "uzfxzxv",
    "latitude": 127.042,
    "longitude": 37.6029,
    "receive_time": "2021-08-25T15:43:53.000+00:00",
    "airQualitySensor": {
      "geohash": "uzfxzxv",
      "device_id": "a9148db7",
      "co": 3.0,
      "pm10": 5.0,
      "pm25": 5.0
    }

...

  {
    "geohash": "wydmfyj",
    "latitude": 127.043,
    "longitude": 37.6062,
    "receive_time": null,
    "airQualitySensor": {
      "geohash": "wydmfyj",
      "device_id": "a9148db7",
      "co": 15.0,
      "pm10": 6.0,
      "pm25": 6.0
    }
  }
]
```

## 선택 지역 대기 정보 API

```
GET /api/locations/{geohash}
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
  "geohash": "wydmfvt",
  "latitude": 127.043,
  "longitude": 37.6046,
  "receive_time": null,
  "airQualitySensor": {
    "geohash": "wydmfvt",
    "device_id": "a9148db7",
    "co": 13.0,
    "pm10": 5.0,
    "pm25": 7.0
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
GET /api/airqualitysensorsall
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
[
  {
    "geohash": "uzfxcpu",
    "device_id": "b958bee8",
    "co": 4.0,
    "pm10": 4.0,
    "pm25": 4.0
  },
  {
    "geohash": "uzfxzxv",
    "device_id": "a9148db7",
    "co": 3.0,
    "pm10": 5.0,
    "pm25": 5.0
  },

...

  {
    "geohash": "wydmfyj",
    "device_id": "a9148db7",
    "co": 15.0,
    "pm10": 6.0,
    "pm25": 6.0
  }
]
```

## 대기정보 정렬-필터링 API
대기정보를 정렬하고 필터링 함

```
GET /api/airqualitysensors?
    sort = {sort}
    &item = {item}
    &geohash = {geohash}
    &precision = {precision}
```

- sort
  - asc : 오름차순
  - desc : 내림차순
- item
  - co : 일산화탄소
  - pm10 : 미세먼지
  - pm25 : 초미세먼지
- geohash : 검색할 대상 지역
- precision
  - geohash 정확도.
  - default는 6
  - geohash값 앞에서부터 `{precision}`자리까지 같은 지역의 대기정보를 보여줌

### 응답 item

- airQualitySensor : 대기정보
    - geohash : geohash값
    - device_id : 라즈베리파이 device id
    - co : 일산화탄소 측정값
    - pm10 : 미세먼지 측정값
    - pm25 : 초미세먼지 측정값
...

### response 200
```
/api/airqualitysensors?item=pm10&sort=desc&geohash=uzfxzxv&precision=3
```
pm10 기준, 내림차순 정렬, "uzfxzxv"지역 정확도는 3 (앞 3자리 같은 data 검색)

```json
[
  {
    "geohash": "uzfxzxv",
    "device_id": "a9148db7",
    "co": 3,
    "pm10": 5,
    "pm25": 5
  },
  {
    "geohash": "uzfxcpu",
    "device_id": "b958bee8",
    "co": 4,
    "pm10": 4,
    "pm25": 4
  },
  {
    "geohash": "uzfxzzz",
    "device_id": "b958bee8",
    "co": 4,
    "pm10": 4,
    "pm25": 4
  },
  {
    "geohash": "uzfzuxc",
    "device_id": "a9148db7",
    "co": 3,
    "pm10": 2,
    "pm25": 2
  }
]
```

## 리버스 지오코딩 API
원하는 장소의 도로명 주소를 리턴함.

```
GET /api/locations/search?lat={lat}&lon={lon}
```
주소를 요청할 장소의 위도, 경도를 요청 파라미터로 전달

### 응답 item

- city_do : 주소에서 시/도에 해당하는 명칭
- gu_gun : 주소에서 군/구에 해당하는 명칭
- roadName : 주소에서 도로명에 해당하는 명칭

### response 200

```
GET /api/locations/search?lat=37.604817&lon=127.042378
```

```json
{
  "city_do":"서울특별시",
  "gu_gun":"성북구",
  "roadName":"장월로1마길"
}
```


