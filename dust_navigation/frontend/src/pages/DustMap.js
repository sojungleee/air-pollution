import React, { Component } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../components/Sidebar/Panel";
import { NaverMap, Marker, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import { IoReloadCircleOutline } from 'react-icons/io5';
import { FaWindowMinimize } from 'react-icons/fa';

class DustMap extends Component {

    constructor(props) {
        super(props);
        this.success = this.success.bind(this);
        this.state = {
            list: [],
            lati: 0,
            long: 0
        };

    }

    componentDidMount() {
        console.log('component did mounted');
        const geo = this.getLocation();
        const testgeo = 'uzfxzxv';

        fetch(`http://localhost:3000/api/locations/test/${encodeURIComponent(testgeo)}`)
            .then(res => res.json())
            // .then(data => {console.log(data)});
            .then(data => this.setState({
                list: data,
            }));
    }

    getLocation() {
        //let lat, lng;
        //let ngeohash = require('ngeohash');
        //let geohash = "";
        // if (navigator.geolocation) { // GPS를 지원하면
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //         let lat = position.coords.latitude;
        //         let lng = position.coords.longitude;
        //         let geohash = ngeohash.encode(lat,lng).substring(0,7);
        //         // alert('위도 : ' + lat + ' 경도 : ' + long + ' Geohash : ' + geohash);
        //         console.log('위도 : ' + lat + ' 경도 : ' + lng + ' Geohash : ' + geohash);
        //     }
        //     , function(error) {
        //         console.error(error);
        //     }, {
        //         enableHighAccuracy: false,
        //         maximumAge: 0,
        //         timeout: Infinity
        //     }
        //     );
        // } 
        // else {
        //     alert('GPS를 지원하지 않습니다');
        //     return geohash;
        // }
        if (navigator.geolocation) { // GPS를 지원하면
            navigator.geolocation.getCurrentPosition(this.success);
            console.log(this.success);
        }
    }
    success = (position) => {
        //const{lati} = this.setState({lati: 1});
        let ngeohash = require('ngeohash');
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let geohash = ngeohash.encode(lat,lng).substring(0,7);
        // alert('위도 : ' + lat + ' 경도 : ' + long + ' Geohash : ' + geohash);
        console.log('위도 : ' + lat + ' 경도 : ' + lng + ' Geohash : ' + geohash);
        this.setState({
            lati: lat,
            long: lng
        });
        console.log(this.state);
        return lat;
    }

    render() {
        const { list } = this.state;
        const keys = Object.keys(list);
        console.log("key: " + keys);
        const valueString = JSON.stringify(Object.values(list));

        const splitedString = valueString.split(",");

        function regExp(str){
            var reg = /[\{\}\[\]\'\"]/gi
            //특수문자 검증
            if(reg.test(str)){ //특수문자 제거후 리턴
                return str.replace(reg, "");
            } else { //특수문자가 없으므로 본래 문자 리턴
                return str;
            }
        }
// git 되게 해주라

        for(let i in splitedString) {
            splitedString[i] = regExp(splitedString[i]);
            console.log(splitedString[i]);
        }

        let geoHash = (splitedString[0]||'').split(":")[1];
        let lat = (splitedString[1]||'').split(":")[1];
        let lon = (splitedString[2]||'').split(":")[1];
        let time = (splitedString[3]||'').substring(13);
        let device_id = (splitedString[5]||'').split(":")[1];
        let ozone = (splitedString[6]||'').split(":")[1];
        let co = (splitedString[7]||'').split(":")[1];
        let pm10 = (splitedString[8]||'').split(":")[1];
        let pm25 = (splitedString[9]||'').split(":")[1];

        const buttonStyle = {
            borderWidth: 0,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#F5F5F5',
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
                            center={{ lat: 37.6029, lng: 127.042 }}
                            // center={{ lat: this.state.lati, lng: this.state.long }}
                            zoom={17}
                        >
                            <Marker
                                key={1}
                                // position={{ lat: this.state.lati, lng: this.state.long }}
                                position={{ lat: 37.6029, lng: 127.042 }}
                                animation={2}
                                onClick={() => {alert('여기는 N서울타워입니다.');}}
                            />
                        </NaverMap>

                    </RenderAfterNavermapsLoaded>
                </MapContainer>

                <DescriptionContainer>
                    <div>
                        <br />
                        <h1 style={{fontWeight:'bold'}}>현위치 대기 상황</h1>
                        <Description>
                            {/*값 색깔 바꾸고 싶은데 일단 보류*/}
                            <p>[측정 주소]<br />{Object.keys(list)}</p>
                            <p>[측정 시각]<br />{(time||'').split('T')[0]}
                                &nbsp;{((time||'').split('T')[1]||'').split('.')[0]}</p>
                            {<p>[미세먼지(PM<sub>10</sub>) 농도] {pm10}㎍/㎥</p>}
                            {<p>[초미세먼지(PM<sub>2.5</sub>) 농도]<br /> {pm25}㎍/㎥</p>}
                            {<p>[일산화탄소(CO) 농도]<br /> {co}ppm</p>}
                            {<p>[오존(CO3) 농도]<br /> {ozone}ppm</p>}
                        </Description>
                    </div>
                    {/* <Reload>
                        <button style={buttonStyle} onClick={this.success}><IoReloadCircleOutline size='60'/></button>
                    </Reload> */}
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
    height: 94vh;
    float: left;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        float: none;
        width: 100%;
    }
`;

const DescriptionContainer = styled.div`
    width: 30%;
    height: 94vh;
    float: right;
    background-color: #F5F5F5;

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