import React, { Component } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";

import { Route, BrowserRouter as Router } from 'react-router-dom';
import { NaverMap, Marker, RenderAfterNavermapsLoaded } from 'react-naver-maps';

class Dust_map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sensors: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:8080/api/locations')
            .then(res => res.json())
            .then(data => this.setState({
                sensors: data
            }));
    }

    render() {
        const { sensors } = this.state;

        const Page = sensors.map((sensor) => (
            <MainContainer key={sensor.geohash} id={sensor.geohash}>
                    <Panel title="대기 정밀 지도"/>
                    <MapContainer>
                        <RenderAfterNavermapsLoaded	   // Render후 Navermap로드
                            ncpClientId={'f740jc2cw6'} // 자신의 네이버 계정에서 발급받은 Client ID
                            error={<p>Maps Load Error</p>}
                            loading={<p>Maps Loading...</p>}
                        >
                            <NaverMap
                                id="react-naver-maps-introduction"
                                style={{ width: '100%', height: '100%' }}
                                center={{ lat: 37.497175, lng: 127.027926 }}
                            >
                                <Marker
                                    key={1}
                                    position={{ lat: 37.551229, lng: 126.988205 }}
                                    animation={2}
                                    onClick={() => {alert('여기는 N서울타워입니다.');}}
                                />
                            </NaverMap>
                        </RenderAfterNavermapsLoaded>
                    </MapContainer>

                    <DescriptionContainer>
                        <div>
                            <h1>의 현재 대기 상황</h1>
                            <Description>
                                <p>- 측정 주소:{sensor.geohash}</p>
                                <p>- 측정 시각:{sensor.receive_time}</p>
                                <p>- 미세먼지 농도: {sensor.airQualitySensor.pm10}</p>
                                <p>- 초미세먼지 농도 : {sensor.airQualitySensor.pm25}</p>
                                <p>- 일산화탄소 농도 : {sensor.airQualitySensor.co}</p>
                                <p>- 평가 : {}</p>              
                            </Description>
                        </div>
                    </DescriptionContainer>
                </MainContainer>
        ));

        return <MainContainer>{Page}</MainContainer>;
    }
}

/*SCSS*/
// 참고!! 배경색상은 구분을 위해 아무렇게나 해둔 임시용입니다. 나중에 상의해서 바꿔요
// 7/31 소정: 나중에 추가할 것 : 스크롤바

// 구분 위한 임시 css
const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fef5d4;
    font-family: "nanum";

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

// float width % 말고 position으로 위치 정렬로 수정해 보기
const MapContainer = styled.div`
    background-color: lightgray; 
    width: 70%;
    height: 92vh;
    float: left;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        float: none;
        width: 100%;
    }
`;

const DescriptionContainer = styled.div`
    background-color: lightblue;
    width: 30%;
    height: 92vh;
    float: right;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        float: none;
        width: 100%;
    }
`;

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

export default Dust_map;