import React from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import Panel from "../../src/components/Sidebar/Panel";
import RankingBar from './RankingBar';
import Dropdown from 'react-dropdown'; //dropdown from npm
import 'react-dropdown/style.css';

// 8/2 소정 질문: RankingBar.js를 따로 만들어서 Import 해오는게 깔끔할까요? 나중에 Ranking페이지에 이걸 RankingBar를 랜덤으로 불러와야 하니까..
// 8/5 RakingBar.js를 따로 생성해서 import 해왔는데 별로면 후에 다시 합치는 걸로...

const options = [
    '일산화탄소', '미세먼지', '아황산가스', '오존'
];
const defaultOption = options[0];

const Ranking = (props) => {
    return (
        <MainContainer>
            <Panel title="랭킹 페이지"/>
            <RankingContainer>
                <SubContatiner>
                    <Dropdown options={options} value={defaultOption} placeholder="선택" />
                </SubContatiner>
                
                {/* 예시로 바를 여러 개 불러와봤음 */}
                <RankingBar/>
                <RankingBar/> 
                <RankingBar/> 
            </RankingContainer>
        </MainContainer>
    );
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