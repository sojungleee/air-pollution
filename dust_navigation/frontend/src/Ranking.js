import React from 'react';
import './App.css';
import styled from 'styled-components';
import Panel from "./components/Sidebar/Panel";

// 8/2 소정 질문: RankingBar.js를 따로 만들어서 Import 해오는게 깔끔할까요? 나중에 Ranking페이지에 이걸 RankingBar를 랜덤으로 불러와야 하니까..

const Ranking = (props) => {
    return (
        <MainContainer>
            <Panel title="랭킹 페이지"/>
            <RankingBar>
                <LocationAlphabet>
                    <div>A</div>
                </LocationAlphabet>

                <DustInfo>
                    <div>
                        <h3>서울특별시 성북구 화랑로13길 60</h3>
                        <DustList>
                            <li>일산화탄소: 10</li>
                            <li>미세먼지: 5</li>
                            <li>아황산가스: 10</li>
                            <li>오존: 5</li>
                        </DustList>
                    </div>
                </DustInfo>
                
                <DustResult>
                    <div>매우 쾌적함</div>
                </DustResult>
            </RankingBar>

        </MainContainer>
    );
}

// 구분 위한 임시 css
const MainContainer = styled.div`
    width: 100vw;
    height: 92vh;
    background-color: #fef5d4;
    border-radius: 30px;
    font-family: "nanum";

    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`;

const RankingBar = styled.div`
    background-color: pink;
    margin: auto;
    width: 88vw;
    height: 14vh;
    font-weight: bold;

    @media screen and (max-width: 800px) {
        width: 90vw;
    }
`;

const LocationAlphabet = styled.div`
    // background-color: lightgray;
    text-align: center;
    display: inline-block;
    float: left;
    height: 14vh;
    width: 10%;
    font-size: 70px;

    & div {
        padding: 2vh 0px;
        margin: 0px 0px 0px 5px;
    }

    // iPad
    @media screen and (max-width: 800px) {
        font-size: 55px;
        & div {
            padding: 3vh 0px;
        }
    }

    // mobile
    @media screen and (max-width: 550px) {
        font-size: 40px;
        & div {
            padding: 4vh 0px;
        }
    }

    // iPhone 5/SE
    @media screen and (max-width: 320px) {
        font-size: 33px;
        & div {
            padding: 3.5vh 0px;
        }
    }
`;

const DustInfo = styled.div`
    // background-color: lightgreen;
    text-align: left;
    display: inline-block;
    margin: auto;
    height: 14vh;
    width: 60%;
    font-size: 20px;

    & div {
        margin: 0px 0px 0px 10px;
    }

    @media screen and (max-width: 930px) {
        font-size: 15px;
    }

    @media screen and (max-width: 550px) {
        font-size: 12px;
        & div {
            padding: 1vh 0px;
        }
    }

    @media screen and (max-width: 400px) {
        font-size: 11px;
    }

    @media screen and (max-width: 320px) {
        font-size: 8px;
        & div {
            margin: 0px 0px 0px 5px;
        }
    }
`;

const DustList = styled.ul`
    list-style-type: circle;
    margin: 0px;
    padding: 0px;
    & li {
        padding: 0px 20px 0px 0px;
        display: inline-block;
    }
`;

const DustResult = styled.div`
    // background-color: blue;
    display: inline-block;
    float: right;
    height: 14vh;
    width: 25%;
    font-size: 35px;
    text-align: right;

    & div {
        padding: 5vh 0px;
        margin: 0px 30px 0px 0px;
    }

    @media screen and (max-width: 800px) {
        width: 30%;
        font-size: 32px;
        & div {
            margin: 0px 5px 0px 0px;
        }
    }

    @media screen and (max-width: 650px) {
        font-size: 25px;
    }

    @media screen and (max-width: 450px) {
        font-size: 18px;
        & div {
            padding: 6vh 0px;
        }
    }

    @media screen and (max-width: 320px) {
        width: 25%;
        font-size: 13px;
        & div {
            padding: 5.5vh 0px;
            margin: 0px 3px 0px 0px;
        }
    }
`;

export default Ranking;