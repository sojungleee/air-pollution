import React, { Component } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";

class Navigation extends Component {
    render() {
        return (
            <MainContainer>
                <Panel title="클린 내비게이션"/>
                navigation page test
            </MainContainer>
        );
    }
}

// 구분 위한 임시 css
const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fef5d4;
    font-family: "nanum";

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

export default Navigation;