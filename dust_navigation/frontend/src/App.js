import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

// import js files
import Dust_map from './pages/Dust_map';
import Ranking from './pages/Ranking';
import Statistics from './pages/Statistics';
//import Navigation from './pages/Navigation';
import Distribution from './pages/Distribution'
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
                {/*<Route path="/navigation" component={Navigation}/>*/}
                <Route path="/distribute" component={Distribution}/>
                <Route path="/statistics" component={Statistics}/>
            </div>
        );
    }
}

export default App;