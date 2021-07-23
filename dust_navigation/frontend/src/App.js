import React from 'react';
import './App.css';

// import js files
import Dust_map from './Dust_map';
import Ranking from './Ranking';
import Navigation from './Navigation';

// class component
class App extends React.Component{
    constructor(props){
        super(props);

        // 조건부 랜더링.. 후에 추가
        // *추가해야 하는 것: 메뉴 클릭시 메뉴바 나오도록 이벤트 및 css 설정
        this.state = {
            page: "dust_map", // 수정: 메뉴를 누르면 페이지가 바뀌도록 조정?
        };
    }

    render () {
        return (
            <div className="App">  
                {this.state.page === "dust_map" && (<Dust_map name={this.state.name}/>)}
                {this.state.page === "ranking" && (<Ranking name={this.state.name}/>)}
                {this.state.page === "navigation" && (<Navigation name={this.state.name}/>)}
            </div>
        );
    }
}

    

export default App;