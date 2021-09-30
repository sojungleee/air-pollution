import React, { Component } from 'react';
import styled from 'styled-components';
import '../../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Select from 'react-select';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Panel from "../../src/components/Sidebar/Panel";
import RankingBar from './RankingBar';

const options = [
    { value: 'pm10', label: '미세먼지' },
    { value: 'pm25', label: '초미세먼지' },
    { value: 'co', label: '일산화탄소' },
];

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            propsValue: 'pm10', // 초기값 미세먼지로
            popoverOpen: false,
        };
        this.togglePopover = this.togglePopover.bind(this); // bind 대신 arrow function maybe?

    }

    togglePopover() {
        this.setState({ popoverOpen: !this.state.popoverOpen });
    }

    /*handlePopoverOpen = () => {
        this.setState({
            popoverOpen: true,
        })
    }

    handlePopoverClose = () => {
        this.setState({
            popoverOpen: false,
        })
    }*/

    handleDropdownChange = selectedOption => {
        this.setState({ selectedOption, propsValue: selectedOption.value } );
        console.log('Option selected: ', selectedOption);
        // console.log('state 상태', this.state);
    };

    render() {
        const { selectedOption, propsValue, popoverOpen } = this.state;
        console.log('<<ranking.js propsValue>>: ',propsValue);

        return (
            <MainContainer>
                <Panel title="랭킹 정보"/>
                <TopContainer>
                    <DropdownContainer>
                        <Select
                            value={selectedOption}
                            defaultvalue={options[0]}
                            onChange={this.handleDropdownChange}
                            options={options}
                            placeholder={"대기 정보 정렬"}
                        />
                    </DropdownContainer>

                    <InfoContainer>
                        <AiOutlineInfoCircle
                            size='35' color='#C8D7FF' id='info' type='button'
                        />
                        <Popover
                            placement="bottom"
                            isOpen={popoverOpen}
                            target="info"
                            toggle={this.togglePopover}
                        >
                            <PopoverHeader>대기 정보 평가 기준</PopoverHeader>
                            <PopoverBody>
                                <div>
                                    미세먼지(PM<sub>10</sub>)
                                    <ul>
                                        <li>좋음: 0 ~ 30</li>
                                        <li>보통: 31 ~ 80</li>
                                        <li>나쁨: 81 ~ 150</li>
                                        <li>매우 나쁨: 151 ~</li>
                                    </ul>
                                </div>
                                <div>
                                    초미세먼지(PM<sub>2.5</sub>)
                                    <ul>
                                        <li>좋음: 0 ~ 15</li>
                                        <li>보통: 16 ~ 35</li>
                                        <li>나쁨: 36 ~ 75</li>
                                        <li>매우 나쁨: 76 ~</li>
                                    </ul>
                                </div>
                                <div>
                                    일산화탄소(CO)
                                    <ul>
                                        <li>좋음: 0 ~ 2</li>
                                        <li>보통: 2.1 ~ 9</li>
                                        <li>나쁨: 9.1 ~ 15</li>
                                        <li>매우 나쁨: 15.1 ~</li>
                                    </ul>
                                </div>
                            </PopoverBody>
                        </Popover>
                    </InfoContainer>

                </TopContainer>

                <RankingContainer>
                    <RankingBar value={propsValue}/>
                </RankingContainer>
            </MainContainer>
        );
    }
}

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: "nanum";

    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`;

const TopContainer = styled.div`
    width: 90vw;
    height: 40px;
    margin: auto;
    margin-top: 20px;
`;

const DropdownContainer = styled.div`
    margin-left: 10px;
    width: 160px;
    float: left;

    @media screen and (max-width: 550px) {
        width: 100px;
    }
`;

const InfoContainer = styled.div`
    margin-right: 10px;
    float: right;
  
    @media screen and (max-width: 550px) {
        width: 100px;
    }
`;

const RankingContainer = styled.div`
    width: 90vw;
    margin: auto;
`;

export default Ranking;