import React, { Component } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";
import { NaverMap, Marker, RenderAfterNavermapsLoaded } from 'react-naver-maps';

class Navigation extends Component {
    render() {
        return (
            <MainContainer>
                <Panel title="클린 내비게이션"/>
                <RenderAfterNavermapsLoaded	   // Render후 Navermap로드
                    ncpClientId={'f740jc2cw6'} // 자신의 네이버 계정에서 발급받은 Client ID
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                >
                    <NaverMap
                        id="react-naver-maps-introduction"
                        style={{ width: '80vw', height: '80vh' }}
                        center={{ lat: 37.497175, lng: 127.027926 }}
                    >

            
                    </NaverMap>
                </RenderAfterNavermapsLoaded>
            </MainContainer>
        );
    }
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

export default Navigation;