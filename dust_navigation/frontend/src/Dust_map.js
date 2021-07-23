import React from 'react';
import styled from 'styled-components';

const Dust_map = (props) => {
    return (
        <MainContainer>
            <TopBar>
               <h3>내 주변 공기 현황</h3>
            </TopBar>
            
            <MapContainer>
                지도 들어갈 곳
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
const TopBar = styled.div`
    width: 100%;
    padding: 5px;
    background-color: #46BD7B;
    color: white;

    & h3 {
        text-align: left;
        padding: 0px 0px 0px 50px;
        margin: 10px 0px;
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
`;

export default Dust_map;