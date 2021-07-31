import React from 'react';
import './App.css';
import styled from 'styled-components';

const Navigation = (props) => {
    return (
        <div>
            navigation page test
        </div>
    );
}

// 구분 위한 임시 css
const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fef5d4;
    border-radius: 30px;
    font-family: "nanum";

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

// 모든 Js 공용
// 의문: TopBar를 변수로 아예 선언해서 넘겨 줄 수 있나...?
const TopBar = styled.div`
    width: 100%;
    height: 50px;
    padding: 5px;
    background-color: #46BD7B;
    color: white;

    & h2 {
        text-align: left;
        width: 200px;
        padding: 10px 0px 0px 30px;
        margin: 0px;
        display: inline-block;
        float: left;
    }
`;

export default Navigation;