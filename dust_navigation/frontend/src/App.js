import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

// import js files
import Dust_map from './Dust_map';
import Ranking from './Ranking';
import Navigation from './Navigation';
import { CgSidebar } from 'react-icons/cg';

function App(props) {
    // 요청받은 정보를 담아줄 변수 선언
    const [ testStr, setTestStr ] = useState('');

    // 변수 초기화
    function callback(str) {
        setTestStr(str);
    }

    // 첫 번째 렌더링을 마친 후 실행
    useEffect(() => {
        console.log('useEffect() 실행');
        axios({
            url: '/', // 이것이 필요한가에 대한 의문...
            method: 'GET'
        }).then((res) => {
            callback(res.data);
        })
    }, []);

    return (
        <div className="App"> 
            <Route path="/" exact={true} component={Dust_map}/>
            <Route path="/ranking" component={Ranking}/>
            <Route path="/navigation" component={Navigation}/>  
        </div>
    );
}

export default App;