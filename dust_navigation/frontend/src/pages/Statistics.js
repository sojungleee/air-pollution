import React, { Component } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";

class Statistics extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <MainContainer>
              <Panel title="통계 정보"/>
              test
          </MainContainer>
        );
    }
}

const MainContainer = styled.div`
    background-color: lightblue;
    width: 100vw;
    height: 100vh;
    font-family: "nanum";

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;


export default Statistics;