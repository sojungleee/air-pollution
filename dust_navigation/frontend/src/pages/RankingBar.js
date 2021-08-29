import React, { Component } from 'react';
import styled from 'styled-components';
import * as functions from './functions';
import {getRating_pm10} from "./functions";

class RankingBar extends Component {
    constructor(props) {
        console.log('(constructor) props', props);
        super(props);
        this.state = {
            lists: [],
            dustfunction: null
        }
    }

    componentDidMount() {
        console.log('!!! componentDidMount called. 처음 mount시 한번 불려옴');
        // console.log('(componentDidMount) props', this.props);
        fetch( `http://localhost:3000/api/airqualitysensors?item=${encodeURIComponent('pm10')}&sort=${encodeURIComponent('asc')}&geohash=${encodeURIComponent('uzfxzxv')}&precision=${encodeURIComponent('3')}`,
            { method: "GET" })
            .then(res => res.json())
            .then(data =>
                this.setState({
                    lists: data
                })
            );
    }

    componentDidUpdate(prevProps) {
        // console.log('(componentDidUpdate) prevProps', prevProps);
        if (prevProps.value !== this.props.value) {
            console.log('(componentDidUpdate) prevProps changed/recall fetch with new props. which is: ', this.props.value);
            fetch( `http://localhost:3000/api/airqualitysensors?item=${encodeURIComponent(this.props.value)}&sort=${encodeURIComponent('asc')}&geohash=${encodeURIComponent('uzfxzxv')}&precision=${encodeURIComponent('3')}`,
                { method: "GET" })
                .then(res => res.json())
                .then(data =>
                    this.setState({
                        lists: data
                    })
                );

            // 이런 느낌으로 다르게 불러야 하는데...
            if (this.props.value === 'pm10') {
                console.log('pm10 state change');
                this.setState(prevState => {
                    return {
                        dustfunction: getRating_pm10(this.props.value)
                    }
                });
            }
            else if (this.props.value === 'pm25')
                this.setState({dustfunction: functions.getRating_pm25(this.props.value)});
            else if (this.props.value === 'co')
                this.setState({dustfunction: functions.getRating_co(this.props.value)});
            console.log('(componentDidUpdate) dustfunction have changed', this.state.dustfunction);
        }
    }

    render() {
        const { lists, dustfunction } = this.state;
        console.log('(render) GET API lists', lists);
        // console.log('(render) props', this.props);

        /* 주소 구하기 시도하던 것
        const addrs = [
            {lat: "37.604817", lon: "127.042378"},
            {lat: "37.604872", lon: "127.041785"},
            {lat: "37.6062", lon: "127.043"},
        ];

        Promise.all(addrs.map(addr =>
            fetch(`http://localhost:3000/api/locations/search?lat=${encodeURIComponent(addr.lat)}&lon=${encodeURIComponent(addr.lon)}`,
                { method: "GET", })
                .then(data => data.text())
                .then(text => {
                    // console.log('주소:', text);
                }).catch(function (error) {
                    console.log('failed',error)
                })
        ));*/

        // style 구할 때, dustresult 보여줄 때 getBarColor가 각각 두번씩 반복으로 호출되는데 한번에 싹 해결할 방법이 없을까..
        const dustList = lists.map((list, idx) => (
            // list.this.props.value << 와 같은 구현을 어떻게 하지?
            <Bar style={functions.getBarColor(functions.getRating_pm10(list.pm10))} key={idx}>
                <RankingNum>
                    <div>{idx + 1}</div>
                </RankingNum>

                <DustInfo>
                    <div>
                        <h3>{list.geohash}</h3> {/* 주소 받아와야 함 */}
                        <DustList>

                            <li>미세먼지(PM<sub>10</sub>): {list.pm10}㎍/㎥</li>
                            <li>초미세먼지(PM<sub>2.5</sub>): {list.pm25}㎍/㎥</li>
                            <li>일산화탄소(CO): {list.co}ppm</li>
                            {/*<li>오존: {list.ozone}</li>*/}
                        </DustList>
                    </div>
                </DustInfo>

                <DustResult>
                    {/*대표 결과는 pm10*/}
                    <div>{functions.getRating_pm10(list.pm10)}</div>
                </DustResult>
            </Bar>
        ));

        return <Bar>{dustList}</Bar>;
    }
}

const Bar = styled.div`
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

const RankingNum = styled.div`
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
    text-align: left;
    display: inline-block;
    margin: auto;
    margin-top: 10px;
    height: 14vh;
    width: 60%;
    font-size: 20px;

    & div {
        margin: 15px 0px 15px 10px;
    }

    @media screen and (max-width: 930px) {
        font-size: 15px;
    }
    
    @media screen and (max-width: 700px) {
        margin-top: 0px;
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