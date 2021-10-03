import React, { useState } from 'react';
import axios from 'axios';
import Panel from "../../src/components/Sidebar/Panel";

const Distribution = () => {
    const [data, setData ] = useState(null);
    const onClick = () => {
        axios.get('http://localhost:3000/api/locations').then(response => { setData(response.data)});
    };
    const saveJson = () => {
        fetch('http://localhost:3000/api/locations', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `API.json`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            })};

        return (
        <>
            <Panel title="API 조회"/>
            <h1>Dust Navigation Open API</h1>
            <h2>모든 지역 대기 정보 API</h2>
            <div className="apiUrl">
                GET /api/locations
            </div>
            <h3>응답item</h3>
            <div style={{display:'inline-block'}}>
                <p align="left">
                - geohash : geohash값<br />
                - latitude : 위도<br />
                - longitude : 경도<br />
                - receive_time : 응답 시간 (마지막 측정 시간)<br />
                - airQualitySensor : 대기정보<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- geohash : geohash값<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- device_id : 라즈베리파이 device id<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ozone : 오존 측정값<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- co : 일산화탄소 측정값<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm10 : 미세먼지 측정값<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm25 : 초미세먼지 측정값<br />
                </p>
            </div>
            <br />
            <div>
                <button onClick={ onClick }>수집 지역 대기 정보 API 불러오기</button>
                <button onClick={ saveJson }>수집 지역 대기 정보 API 다운로드</button>
            </div>
            <br />
            {data && <textarea rows={20} cols={60} value={JSON.stringify(data, null, 5)} readOnly={true}/>}

            <h2>선택 지역 대기 정보 API</h2>
            <div className="apiUrl">
                GET /api/locations/&#123;geohash&#125;
            </div>
            <h3>응답item</h3>
            <div style={{display:'inline-block'}}>
                <p align="left">
                    - geohash : geohash값<br />
                    - latitude : 위도<br />
                    - longitude : 경도<br />
                    - receive_time : 응답 시간 (마지막 측정 시간)<br />
                    - airQualitySensor : 대기정보<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- geohash : geohash값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- device_id : 라즈베리파이 device id<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ozone : 오존 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- co : 일산화탄소 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm10 : 미세먼지 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm25 : 초미세먼지 측정값<br />
                </p>
            </div>
            <br />
            <div>
                <button onClick={ onClick }>수집 지역 대기 정보 API 불러오기</button>
                <button onClick={ saveJson }>수집 지역 대기 정보 API 다운로드</button>
            </div>
            <br />
            {data && <textarea rows={20} cols={60} value={JSON.stringify(data, null, 5)} readOnly={true}/>}

            <h2>모든 대기 정보 API</h2><br />
            위도, 경도, 응답시간 미포함. 대기정보만 불러옴
            <div className="apiUrl">
                GET /api/airqualitysensorsall
            </div>
            <h3>응답item</h3>
            <div style={{display:'inline-block'}}>
                <p align="left">
                    - airQualitySensor : 대기정보<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- geohash : geohash값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- device_id : 라즈베리파이 device id<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ozone : 오존 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- co : 일산화탄소 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm10 : 미세먼지 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm25 : 초미세먼지 측정값<br />
                </p>
            </div>
            <br />
            <div>
                <button onClick={ onClick }>수집 지역 대기 정보 API 불러오기</button>
                <button onClick={ saveJson }>수집 지역 대기 정보 API 다운로드</button>
            </div>
            <br />
            {data && <textarea rows={20} cols={60} value={JSON.stringify(data, null, 5)} readOnly={true}/>}

            <h2>대기정보 정렬-필터링 API</h2><br />
            대기정보를 정렬하고 필터링 함
            <div className="apiUrl" >
                GET /api/airqualitysensors?<br />
                sort = &#123;sort&#125;<br />
                &item = &#123;item&#125;<br />
                &geohash = &#123;geohash&#125;<br />
                &precision = &#123;precision&#125;
            </div>
            <div style={{display:'inline-block'}}>
                <p align="left">
                    - sort<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- asc : 오름차순<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ozone : 오존 측정값<br />
                    - item<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm10 : 미세먼지 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm25 : 초미세먼지 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm25 : 초미세먼지 측정값<br />
                    - geohash : 검색할 대상 지역<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- geohash 정확도<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- default는 6<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- geohash값 앞에서부터 &#123;precision&#125;자리까지 같은 지역의 대기정보를 보여줌<br />
                </p>
            </div>
            <h3>응답item</h3>
            <div style={{display:'inline-block'}}>
                <p align="left">
                    - airQualitySensor : 대기정보<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- geohash : geohash값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- device_id : 라즈베리파이 device id<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ozone : 오존 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- co : 일산화탄소 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm10 : 미세먼지 측정값<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm25 : 초미세먼지 측정값<br />
                </p>
            </div>
            <br />
            <div>
                <button onClick={ onClick }>수집 지역 대기 정보 API 불러오기</button>
                <button onClick={ saveJson }>수집 지역 대기 정보 API 다운로드</button>
            </div>
            <br />
            {data && <textarea rows={20} cols={60} value={JSON.stringify(data, null, 5)} readOnly={true}/>}

            <h2>리버스 지오코딩 API</h2><br />
            원하는 장소의 도로명 주소를 리턴함
            <div className="apiUrl">
                GET /api/locations/search?lat=&#123;lat&#125;&lon=&#123;lon&#125;
            </div>
            <h3>응답item</h3>
            <div style={{display:'inline-block'}}>
                <p align="left">
                    - city_do : 주소에서 시/도에 해당하는 명칭<br />
                    - gu_gun : 주소에서 군/구에 해당하는 명칭<br />
                    - roadName : 주소에서 도로명에 해당하는 명칭<br />
                </p>
            </div>
            <br />
            <div>
                <button onClick={ onClick }>수집 지역 대기 정보 API 불러오기</button>
                <button onClick={ saveJson }>수집 지역 대기 정보 API 다운로드</button>
            </div>
            <br />
            {data && <textarea rows={20} cols={60} value={JSON.stringify(data, null, 5)} readOnly={true}/>}
        </>
    );
};

export default Distribution;