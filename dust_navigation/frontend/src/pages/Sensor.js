import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Sensor({ geohash, device_id, co, pm10, pm25 }) {
    console.log("Sensor.js 파일이 실행됨");
    return <div class="sensor">
            <h1>A의 현재 대기 상황</h1>
            <Description>
                <div class="sensor_data">
                    <p>- 측정 주소:{/*아마 여기에 props 받아오기...?*/}</p>
                    <p>- 측정 시각:</p>
                    <p class="sensor_pm10">- 미세먼지 농도: {pm10}</p>
                    <p class="sensor_pm25">- 초미세먼지 농도 : {pm25}</p>
                    <p class="sensor_co">- 일산화탄소 농도 : {co}</p>
                    <p class="sensor_index">- 평가 : {}</p>
                </div>                    
            </Description>
        </div>;
}

Sensor.propTypes = {
    geohash: PropTypes.string,
    device_id: PropTypes.string,
    co: PropTypes.number,
    pm10: PropTypes.number,
    pm25: PropTypes.number
};

const Description = styled.div`
    width: 80%;
    padding: 10px;
    margin: auto;
    text-align: left;
    font-size: 20px;
    font-weight: bold;

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`;

export default Sensor;