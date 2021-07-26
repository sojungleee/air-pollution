import React from 'react';
import styled from 'styled-components';
import { NaverMap, Marker, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import { CgMenu } from "react-icons/cg";

const Dust_map = (props) => {
    return (
        <MainContainer>
            <TopBar>
                <h2>내 주변 공기 현황</h2>
                <CgMenu // 우측 메뉴바
                    // 추가: onClick 이벤트 걸어서 메뉴바 만들 것.
                    style={{
                        width: '30px', height: '30px', float: 'right', padding: '10px 30px 0px 0px'
                    }}
                >
                </CgMenu>
            </TopBar>
            
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
                <h1>A의 현재 대기 상황</h1>
                <Description> {/*이렇게 말고 다르게 적을까 싶기도 함*/}
                    - 측정 주소:{/*아마 여기에 props 받아오기...?*/}<br/>
                    - 측정 시각:<br/>
                    - 미세먼지 농도:<br/>
                    - CO(일산화탄소) 농도:<br/>
                    - 평가:
                </Description>
            </DescriptionContainer>
        </MainContainer>
    );
}

/*SCSS*/
// 참고!! 배경색상은 구분을 위해 아무렇게나 해둔 임시용입니다. 나중에 상의해서 바꿔요

// 구분 위한 임시 css
const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fef5d4;
    border-radius: 30px;
`;

// 모든 Js 공용
// 의문: TopBar를 변수로 아예 선언해서 넘겨 줄 수 있나...?
const TopBar = styled.div`
    width: 100%;
    height: 50px;
    padding: 5px;
    background-color: #46BD7B;
    color: white;

    & h2 {
        text-align: left;
        width: 200px;
        padding: 10px 0px 0px 30px;
        margin: 0px;
        display: inline-block;
        float: left;
    }
`;

// 아래 두 개 height 수정 필요
// float width % 말고 position으로 위치 정렬로 수정해 보기
const MapContainer = styled.div`
    background-color: lightgray; 
    width: 70%;
    height: 500px;
    float: left;
`;

const DescriptionContainer = styled.div`
    background-color: lightblue;
    width: 30%;
    height: 500px;
    float: right;
`;

const Description = styled.div`
    background-color: #B4B4FF;
    width: 80%;
    margin: auto;
    text-align: left;
`;

export default Dust_map;