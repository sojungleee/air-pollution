import React, { Component } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";
import RankingBar from './RankingBar';
import Select from 'react-select';

const options = [
    { value: 'sensor_pm10', label: '미세먼지' },
    { value: 'sensor_pm25', label: '초미세먼지' },
    { value: 'sensor_co', label: '일산화탄소' },
    { value: 'sensor_o3', label: '오존' },
];

class Ranking extends Component {
    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log('Option selected: ', selectedOption);
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <MainContainer>
                <Panel title="랭킹 페이지"/>
                <RankingContainer>
                    <SubContatiner>
                        <Select
                            value={selectedOption}
                            defaultvalue={options[0]}
                            onChange={this.handleChange}
                            options={options}
                            placeholder={"대기 정보별"}
                        />
                    </SubContatiner>

                    <RankingBar/>
                </RankingContainer>
            </MainContainer>
        );
    }
}

// 구분 위한 임시 css
const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    // background-color: #fef5d4;
    font-family: "nanum";

    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`;

const SubContatiner = styled.div`
    width: 150px;
    height: 40px;

    @media screen and (max-width: 550px) {
        width: 100px;
    }
`;

const RankingContainer = styled.div`
    width: 90vw;
    margin: auto;
    padding-top: 3vh;
`;

export default Ranking;