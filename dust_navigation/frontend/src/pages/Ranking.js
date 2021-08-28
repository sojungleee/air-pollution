import React, { Component } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";
import RankingBar from './RankingBar';
import Select from 'react-select';

const options = [
    { value: 'pm10', label: '미세먼지' },
    { value: 'pm25', label: '초미세먼지' },
    { value: 'co', label: '일산화탄소' },
];

class Ranking extends Component {
    state = {
        selectedOption: null,
        propsValue: 'pm10', // 초기값 미세먼지로
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption, propsValue: selectedOption.value } );
        console.log('Option selected: ', selectedOption);
        // console.log('state 상태', this.state);
    };

    render() {
        const { selectedOption, propsValue } = this.state;
        console.log('<<ranking.js propsValue>>: ',propsValue);

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
                            placeholder={"대기 정보 정렬"}
                        />
                    </SubContatiner>

                    <RankingBar value={propsValue}/>
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
    width: 160px;
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