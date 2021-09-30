import React, { useState } from 'react';
import axios from 'axios';
import Panel from "../../src/components/Sidebar/Panel";

const Distribution = () => {
    const [data, setData ] = useState(null);
    const onClick = () => {
        axios.get('http://localhost:3000/api/locations').then(response => { setData(response.data)});
    };
    return (
        <>
            <Panel title="API 조회"/>
            <h1>Dust Navigation Open API</h1>
            <div>
                <p align="left" style={{marginLeft: 33+ 'em'}}>
                - geohash : geohash값<br />
                - latitude : 위도<br />
                - longitude : 경도<br />
                - receive_time : 응답 시간 (마지막 측정 시간)<br />
                - airQualitySensor : 대기정보<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- geohash : geohash값<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- device_id : 라즈베리파이 device id<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- co : 일산화탄소 측정값<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm10 : 미세먼지 측정값<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pm25 : 초미세먼지 측정값<br />
                </p>
            </div>
            <br />
            <div>
                <button onClick={ onClick }>모든 지역 대기 정보 API 불러오기</button>
            </div>
            <br />
            {data && <textarea rows={20} cols={60} value={JSON.stringify(data, null, 5)} readOnly={true}/>}
        </>
    );
};

export default Distribution;