<<<<<<< Updated upstream
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

    // 오류 덩어리 . . . .. .. .. 
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
   
=======
import React, {useEffect} from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";
import reactDOM from "react-dom";

function Navigation() {

    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = `      
            function initTmap() {
                var map = new Tmapv2.Map("TMapApp", {
                    center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
                    width: "100%",
                    height: "100%",
                    zoom:15
                });
            }
            
            initTmap();
            
            //경로안내 요청 함수 ==> 빼버리고 onComplete에서 바로 json데이터를 받는 건? (버튼도 없애고)
            function getRP() {
                var s_latlng = new Tmapv2.LatLng (37.553756, 126.925356);
                var e_latlng = new Tmapv2.LatLng (37.554034, 126.975598);
    
                var optionObj = {
                    reqCoordType:"WGS84GEO", //요청 좌표계 옵셥 설정입니다.
                    resCoordType:"WGS84GEO",  //응답 좌표계 옵셥 설정입니다.
                    trafficInfo:"Y"
                };
    
                var params = {
                    onComplete:onComplete,
                    onProgress:onProgress,
                    onError:onError
                };
    
                // TData 객체 생성
                var tData = new Tmapv2.extension.TData();
    
                // TData 객체의 경로요청 함수
                tData.getRoutePlanJson(s_latlng, e_latlng, optionObj, params);
            }
            
            //경로안내
            function onComplete() {
                console.log(this._responseData); //json으로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.
    
                var jsonObject = new Tmapv2.extension.GeoJSON();
                var jsonForm = jsonObject.rpTrafficRead(this._responseData);
    
                //교통정보 표출시 생성되는 LineColor 입니다.
                var trafficColors = {
    
                    // 사용자가 임의로 색상을 설정할 수 있습니다.
                    // 교통정보 옵션 - 라인색상
                    trafficDefaultColor:"#000000", //교통 정보가 없을 때
                    trafficType1Color:"#009900", //원할
                    trafficType2Color:"#7A8E0A", //서행
                    trafficType3Color:"#8E8111",  //정체
                    trafficType4Color:"#FF0000"  //정체
                };
                jsonObject.drawRouteByTraffic(map, jsonForm, trafficColors);
                map.setCenter(new Tmapv2.LatLng(37.55676159947993,126.94734232774672));
                map.setZoom(14);
            }
    
            //데이터 로드중 실행하는 함수입니다.
            function onProgress(){
    
            }
    
            //데이터 로드 중 에러가 발생시 실행하는 함수입니다.
            function onError(){
                alert("onError");
            }
            
       `;
        script.type = "text/javascript";
        script.async = "async";

        //let b = document.createElement("script");
        //b.innerHTML = `<button onClick={this.getRP}>경로요청 실행</button>`
        //b.type = "text/jsx";
        //b.async = "async";

        //document.head.appendChild(b);
        document.head.appendChild(script);

    }, []);

    return (
        <MainContainer>
            <Panel title="클린 내비게이션"/>
            <div>
                출발지: <input/>
                <button>검색</button>
            </div>

            <div
                id="TMapApp"
                style={{
                    height: "100%",
                    width: "100%",
                    position: "fixed",
                }}
            />
        </MainContainer>
    );


>>>>>>> Stashed changes
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