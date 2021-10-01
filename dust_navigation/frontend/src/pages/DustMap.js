import React, { Component } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../components/Sidebar/Panel";
import { NaverMap, Marker, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import { IoReloadCircleOutline } from 'react-icons/io5';

class DustMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        console.log('component did mounted');
        const geo = this.getLocation();
        const testgeo = 'wydmfyj';

        fetch(`http://localhost:3000/api/locations/test/${encodeURIComponent(testgeo)}`)
            .then(res => res.json())
            // .then(data => {console.log(data)});
            .then(data => this.setState({
                list: data,
            }));
    }

    getLocation() {
        let lat, long;
        let ngeohash = require('ngeohash');
        let geohash = ""
        if (navigator.geolocation) { // GPS를 지원하면
            navigator.geolocation.getCurrentPosition(function(position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                geohash = ngeohash.encode(lat,long).substring(0,7);
                // alert('위도 : ' + lat + ' 경도 : ' + long + ' Geohash : ' + geohash);
                console.log('위도 : ' + lat + ' 경도 : ' + long + ' Geohash : ' + geohash);
            }, function(error) {
                console.error(error);
            }, {
                enableHighAccuracy: false,
                maximumAge: 0,
                timeout: Infinity
            });
        } else {
            alert('GPS를 지원하지 않습니다');
            return geohash;
        }
    }

    render() {
        const { list } = this.state;
        console.log(list);
        const temp = Object.entries(list);
        console.log(temp);

        const graphs = [
            {
                graph: {
                    name: "Praveen Kumar",
                    age: 27,
                    space: "YouTube"
                }
            },
        ];
        console.log(graphs);
        console.log(graphs.map(item => {
            return `${item.graph.name}`
        }));




        const buttonStyle = {
            borderWidth: 0,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#fff',
        }

        return (
            <MainContainer key={list.geohash} id={list.geohash}>
                <Panel title="정밀 대기 지도"/>
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
                        <h1>현재 대기 상황</h1>
                        <Description>
                            <p>- 측정 주소&nbsp;:&nbsp;{Object.keys(list)}</p>
                            <p>- 측정 시각&nbsp;:&nbsp;{(list.receive_time||'').split('T')[0]}
                                &nbsp;{((list.receive_time||'').split('T')[1]||'').split('.')[0]}</p>
                            {/*<p>- 미세먼지(PM<sub>10</sub>) 농도&nbsp;:&nbsp; {sensors.pm10}㎍/㎥</p>*/}
                            {/*<p>- 초미세먼지(PM<sub>2.5</sub>) 농도&nbsp;:&nbsp; {sensors.pm25}㎍/㎥</p>*/}
                            {/*<p>- 일산화탄소(CO) 농도&nbsp;:&nbsp; {sensors.co}ppm</p>*/}
                        </Description>
                    </div>
                    <Reload>
                        <button style={buttonStyle} onClick={this.getLocation}><IoReloadCircleOutline size='60'/></button>
                    </Reload>
                </DescriptionContainer>
            </MainContainer>
        );
    }
}

/*SCSS*/
const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: "nanum";

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

const MapContainer = styled.div`
    // background-color: lightgray; 
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
    width: 30%;
    height: 92vh;
    float: right;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        float: none;
        width: 100%;
    }
`;

const Reload = styled.div`
    // background-color: lightblue;
    position: absolute;
    right: 0px;
    bottom: 0px;
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

export default DustMap;