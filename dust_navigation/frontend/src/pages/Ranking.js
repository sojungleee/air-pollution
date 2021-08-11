import React, { useState } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";
import RankingBar from './RankingBar';
import Select from 'react-select';
import { Component } from 'react/cjs/react.production.min';

// 8/2 소정 질문: RankingBar.js를 따로 만들어서 Import 해오는게 깔끔할까요? 나중에 Ranking페이지에 이걸 RankingBar를 랜덤으로 불러와야 하니까..
// 8/5 RakingBar.js를 따로 생성해서 import 해왔는데 별로면 후에 다시 합치는 걸로...
const options = [
    { value: '일산화탄소', label: '일산화탄소' },
    { value: '미세먼지', label: '미세먼지' },
    { value: '아황산가스', label: '아황산가스' },
    { value: '오존', label: '오존' },
];
// const defaultOption = options[0];

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
                            onChange={this.handleChange}
                            options={options}
                            placeholder={"대기 정보별"}
                        />
                    </SubContatiner>
                    
                    {/* 예시로 바를 여러 개 불러와봤음 */}
                    <RankingBar/>
                    <RankingBar/> 
                    <RankingBar/> 
                </RankingContainer>
            </MainContainer>
        );   
    }
}

// 구분 위한 임시 css
const MainContainer = styled.div`
    width: 100vw;
    height: 92vh;
    background-color: #fef5d4;
    font-family: "nanum";

    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`;

const SubContatiner = styled.div`
    // background-color: #87F5F5;
    // float: right;
    width: 150px;
    height: 40px;

    @media screen and (max-width: 550px) {
        width: 100px;
    }
`;

const RankingContainer = styled.div`
    background-color: #FFBBC6;
    width: 90vw;
    margin: auto;
    padding-top: 3vh;
`;

export default Ranking;