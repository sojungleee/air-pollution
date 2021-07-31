import React from 'react';
import './App.css';
import styled from 'styled-components';

const Ranking = (props) => {
    return (
       <MainContainer>
           {/*<TopBar>
                <h2>내 주변 공기 현황</h2>
                <CgMenu // 우측 메뉴바
                    // 추가: onClick 이벤트 걸어서 메뉴바 만들 것.
                    style={{
                        width: '30px', height: '30px', float: 'right', padding: '10px 30px 0px 0px'
                    }}
                >
                </CgMenu>
            </TopBar>*/}

            <RankingBar>
                <Alphabet>
                    <div>A</div>
                </Alphabet>

                <Info>
                    <div>
                        <p>서울특별시 성북구 화랑로13길 60</p>
                        <p>미세먼지 농도: 5 | 일산화탄소 농도: 10</p>
                    </div>
                </Info>
                
                <DustResult>
                    매우 쾌적함
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

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

// 모든 Js 공용
// 의문: TopBar를 변수로 아예 선언해서 넘겨 줄 수 있나...?
// const TopBar = styled.div`
//     width: 100vw;
//     height: 6vh;
//     padding: 5px;
//     background-color: #46BD7B;
//     color: white;

//     & h2 {
//         text-align: left;
//         width: 200px;
//         padding: 10px 0px 0px 30px;
//         margin: 0px;
//         display: inline-block;
//         float: left;
//     }
// `;

const RankingBar = styled.div`
    background-color: pink;
    display: table;
    margin: auto;
    width: 90vw;
    height: 13vh;
`;

const Alphabet = styled.div`
    background-color: lightgray;
    text-align: center;
    display: inline-block;
    float: left;
    height: 100%;
    width: 10%;
`;

const Info = styled.div`
    background-color: lightgreen;
    text-align: left;
    display: inline-block;
    margin: 0;
    height: 100%;
    width: 70%;

`;

const DustResult = styled.div`
    background-color: blue;
    text-align: center;
    display: inline-block;
    float: right;
    height: 100%;
    width: 18%;

    &::before {
        display: inline-block;
        content: “”;
        height: 100%;
        Vertical-align: middle;
    }
`;

/*
const AlignCenter = styled.div`
    display: table-cell;
    vertical-align: middle;
`;
*/

export default Ranking;