# Eco Rroad
실시간 정밀 대기 지도 및 Open API 제공 IOT 프로젝트

## Index

- [Build with](#build-with)
- [Feature](#feature)
- [Web page Screenshot](#web-page-screenshot)
- [HW](#hw)
- [설계](#설계)
  * [API](#api)
  * [ERD](#erd)
  * [서비스 구성도](#서비스-구성도)
  * [서비스 흐름도](#서비스-흐름도)
  * [기능 흐름도](#기능-흐름도)
  * [하드웨어 및 센서 구성도](#하드웨어-및-센서-구성도)
  * [Prototype](#prototype)
- [About us](#about-us)

## Build with
- SpringBoot, React.js
- Java, Javascript, Python
- MariaDB, AWS(RDS)
- RaspberryPi

## Feature

- GPS센서와 각종 대기 센서로 수집한 정보를 라즈베리파이, AWS(RDS)를 거쳐 REST API로 웹에 제공
- 이때 지역 기준은 **Geohash**로 구분
- 디바이스에 부착된 LCD에 수집되고 있는 대기 정보를 나타냄. 웹 뿐만 아니라 이동수단(버스, 자전거)에 부착된 디바이스에서도 측정된 대기정보 확인 가능
- 카카오 맵 API를 이용해 사용자의 위치 혹은 사용자가 알고자 하는 곳의 좌표와 제공된 Geohash에 대한 정보를 바탕으로 각 지역별 대기 상태 추이 확인 가능

> Geohash란, Geocoding System의 일종으로 공간을 사각형으로 분할해 Geograhpic Location 정보를 문자와 숫자로 이루어진 짧은 string 형태로 변환시킨 데이터. 동보다 작은 단위의 지역 정보 표현에 용이

## Web page Screenshot
![image](https://user-images.githubusercontent.com/67352902/144240101-2f80ae7c-91ad-4806-828a-d3a3cc188547.png)

## HW 
- 라즈베리파이에 대기센서와 GPS센서, LCD가 연결된 모습

![image](https://user-images.githubusercontent.com/67352902/144238208-0396abe1-4579-454b-b996-06d7f10c4f73.png)

- LCD

![image](https://user-images.githubusercontent.com/67352902/144238319-78cd538f-fd4b-4907-be62-1e75ee67314d.png)

## 설계

### API
- [📃API 문서 확인](https://github.com/raspberry-cookie/air-pollution/blob/main/API.md)

### ERD
<img src="https://user-images.githubusercontent.com/67352902/144236407-f4fc464a-00f4-4eb3-bd35-a07d26290597.png" vertical-align="middle" height="500" />

### 서비스 구성도
<img src="https://user-images.githubusercontent.com/67352902/144236165-242b83a1-51bd-4850-92ae-b4ca95971996.png" vertical-align="middle" height="500" />

### 서비스 흐름도
<img src="https://user-images.githubusercontent.com/67352902/144236195-e392e811-2f15-4c84-93b7-e51b1f400c02.png" vertical-align="middle" height="500" />

### 기능 흐름도
<img src="https://user-images.githubusercontent.com/67352902/144236278-8e584c5a-66c2-48be-af34-11ff507d1f70.png" vertical-align="middle" height="500" />

### 하드웨어 및 센서 구성도
<img src="https://user-images.githubusercontent.com/67352902/144236540-6f1c69a9-1314-4775-ba3c-1b4a1f1e35f7.png" vertical-align="middle" height="500" />

### Prototype
- 카카오 오븐을 이용한 프로토 타입 제작 : [🔗](https://ovenapp.io/view/LGhBB9GDisMnOU3D5bXHVU273RrKQfjD/)

## About us

- <a href="https://github.com/CalciferK">
    <img src="https://avatars.githubusercontent.com/u/66564091?v=4" vertical-align="middle" height="30" /> 김세인
</a>

- <a href="https://github.com/lee-so-jung">
    <img src="https://avatars.githubusercontent.com/u/84393930?v=4" vertical-align="middle" height="30" /> Sojung Lee
</a>

- <a href="https://github.com/jinju9553">
    <img src="https://avatars.githubusercontent.com/u/69393506?v=4" vertical-align="middle" height="30" /> jinju9553
</a>

- <a href="https://github.com/devyuseon">
    <img src="https://avatars.githubusercontent.com/u/67352902?v=4" vertical-align="middle" height="30" /> Yuseon Lim
</a>

- <a href="https://github.com/im-shung">
    <img src="https://avatars.githubusercontent.com/u/67851738?v=4" vertical-align="middle" height="30" /> Im shung
</a>
