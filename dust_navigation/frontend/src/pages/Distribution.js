import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";

const Distribution = () => {
    const [data, setData ] = useState(null);
    const onClick = () => {
        axios.get('http://localhost:3000/api/locations').then(response => { setData(response.data)});
    };
    return (
        <div>
            <Panel title="API 조회"/>
            <h1>Dust Navigation Open API</h1>
            <p>
                - geohash : geohash값<br />
                - latitude : 위도<br />
                - longitude : 경도<br />
                - receive_time : 응답 시간 (마지막 측정 시간)<br />
                - airQualitySensor : 대기정보<br />
                &nbsp;- geohash : geohash값<br />
                    - device_id : 라즈베리파이 device id<br />
                    - co : 일산화탄소 측정값<br />
                    - pm10 : 미세먼지 측정값<br />
                    - pm25 : 초미세먼지 측정값<br />
                    // 여기 수정할거임
            </p>
            <br />
            <div>
                <button onClick={ onClick }>모든 지역 대기 정보 API 불러오기</button>
            </div>
            <br />
            {data && <textarea rows={20} cols={60} value={JSON.stringify(data, null, 5)} readOnly={true}/>}
        </div>
    );
};

export default Distribution;