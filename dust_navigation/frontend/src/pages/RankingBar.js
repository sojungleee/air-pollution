import React, { Component } from 'react';
import styled from 'styled-components';

/* 8/11 소정: 구현해야 하는 기능들 -> 
    1. DustList에 값을 DB로부터 불러오기
    2. DB로부터 값을 가져온 만큼 Bar가 생성되도록 하기
    3. 값의 수치에 따라 Bar's backgroundColor 바뀌도록 (if문 ?)
    4. 그 외 있다면 적어 주세여
*/

class RankingBar extends Component {
    render() {
        return (
            <Bar>
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
            </Bar>  
        );
    }
}

const Bar = styled.div`
    background-color: ${props => props.background};
    margin: auto;
    width: 88vw;
    height: 15vh;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;

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

export default RankingBar;