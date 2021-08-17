import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

// import js files
import Dust_map from './pages/Dust_map';
import Ranking from './pages/Ranking';
import Sensor from './pages/Sensor'
import Navigation from './pages/Navigation';
import { CgSidebar } from 'react-icons/cg';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App"> 
                <Route path="/" exact={true} component={Dust_map}/>
                <Route path="/ranking" component={Ranking}/>
                <Route path="/navigation" component={Navigation}/>  
            </div>
        );
    }
}

export default App;