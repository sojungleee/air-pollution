import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";
import axios from 'axios';
import { NaverMap, Marker, RenderAfterNavermapsLoaded } from 'react-naver-maps';

const Navigation = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        /*const script = document.createElement("script");
        script.innerHTML = `
            var map;
	        var tData;
            function initTmap() {
                tData = new Tmap.TData();
                tData.getAutoCompleteSearch("불광", 5);

                markerLayer = new Tmap.Layer.Markers();
                map.addLayer(markerLayer);
            }

            // initTmap();
       `;
        script.type = "text/javascript";
        script.async = "async";
        document.head.appendChild(script);*/

        const fetchResult = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 Result 를 초기화하고
                setError(null);
                setResult(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                let url = 'https://apis.openapi.sk.com/tmap/Results/pedestrian?version=1&callback=function';
                let options = {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    data: {
                        appKey : "l7xx190837b986dc4daf9a8b5d59bc6952ed",
                        startX : "126.97871544",
                        startY : "37.56689860",
                        endX : "127.00160213",
                        endY : "37.57081522",
                        // reqCoordType : "WGS84GEO",
                        // resCoordType : "EPSG3857",
                        startName : "출발지",
                        endName : "도착지"
                    }
                };

                let response = await axios.get(options);
                let responseOK = response && response.status === 200 && response.statusText === 'OK';
                if (responseOK) {
                    // let data = await response.data;
                    // do something with data
                    setResult(response.data); // 데이터는 response.data 안에 들어있습니다.
                }
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchResult();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!result) return null;

    return (
        <MainContainer>
            <Panel title="클린 내비게이션"/>
            <div>
                출발지: <input/><button>검색</button>
            </div>
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


                    </NaverMap>
                </RenderAfterNavermapsLoaded>

            </MapContainer>
        </MainContainer>
    );
}

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

const MapContainer = styled.div`
    // background-color: lightgray; 
    width: 80vw;
    height: 80vh;
`;

export default Navigation;