import React, { Component } from 'react';
import styled from 'styled-components';

/* 8/18 구현해야 하는 기능들 -> 
    1. DustList에 값을 DB로부터 불러오기
    2. DB로부터 값을 가져온 만큼 Bar가 생성되도록 하기
    3. 지역 알파벳 선정 기준은 무엇인지?
    4. RankingBar list 
*/

class RankingBar extends Component {
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        // console.log('RankingBar로 넘어온 props:', props);
        this.state = {
            lists: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:8080/api/locations')
            .then(res => res.json())
            .then(data => this.setState({
                lists: data
            }));
    }

    render() {
        const { lists } = this.state;

        function handleDustValue() {
            console.log("handleDustValue 함수 실행");
            //const value = this.state.list.pm10; // 값을 가져오기
            const value = 10; //temp
            
            // 미세먼지 기준 test
            const result_pm10 = (
                value >= 0 && value <= 15 ? "최고" :
                value >= 16 && value <= 30 ? "좋음" :
                value >= 31 && value <= 40 ? "양호" :
                value >= 41 && value <= 50 ? "보통" :
                value >= 51 && value <= 75 ? "나쁨" :
                value >= 76 && value <= 100 ? "상당히 나쁨" :
                value >= 101 && value <= 150 ? "매우 나쁨" :
                value >= 151 ? "최악" : "null"   
            )
            // 8/11 소정: 여기에 다른 변수들을 만들어서 먼지들 다 구해...? 한번에?
            console.log(result_pm10);
            return result_pm10;
        };
        const dustResult_value = handleDustValue();

        function handleBarColor(value) {
            // dustResult 수치 구한 것을 기반으로 색을 정한다
            let color = "white"; // default color
            console.log("the value is: ", value);

            const result = (
                value === "최고" ? color = "blue" :
                value === "좋음" ? color = "lightblue" :
                value === "양호" ? color = "lightgreen" :
                value === "보통" ? color = "green" :
                value === "나쁨" ? color = "yellow" :
                value === "상당히 나쁨" ? color = "orange" :
                value === "매우 나쁨" ? color = "red" :
                value === "최악" ? color = "gray" : "null"
            )
            const style = { background: color };
            return style;
        };
        const style = handleBarColor(dustResult_value);
        console.log("bar style is: ",style);
    
        const dustList = lists.map((list) => (
            <Bar style={style} key={list.geohash} id={list.geohash}>
                <LocationAlphabet>
                    <div>A</div>
                </LocationAlphabet>
    
                <DustInfo>
                    <div>
                        <h3>{list.geohash}</h3> {/* 주소 받아와야 함 */}
                        <DustList>
                            <li>미세먼지: {list.airQualitySensor.pm10}</li>
                            <li>초미세먼지: {list.airQualitySensor.pm25}</li>
                            <li>일산화탄소: {list.airQualitySensor.co}</li>
                            {/*<li>오존: {list.ozone}</li>*/}
                        </DustList>
                    </div>
                </DustInfo>
                
                <DustResult>
                    <div>{dustResult_value}</div>
                </DustResult>
            </Bar> 
        ));

        return <Bar>{dustList}</Bar>;
    }
}

const Bar = styled.div`
    // background-color: ${(props) => props.background || "white"};
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