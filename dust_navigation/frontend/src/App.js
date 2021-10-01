//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// import js files
import DustMap from './pages/DustMap';
import Ranking from './pages/Ranking';
import Statistics from './pages/Statistics';
import Distribution from './pages/Distribution'

// class App extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className="App"> 
//                 <Route path="/" exact={true} component={Dust_map}/>
//                 <Route path="/ranking" component={Ranking}/>
//                 <Route path="/distribute" component={Distribution}/>
//                 <Route path="/statistics" component={Statistics}/>
//             </div>
//         );
//     }
// }

const App = () => {
    return (
        <div className="App"> 
            <Route path="/" exact={true} component={DustMap}/>
            <Route path="/ranking" component={Ranking}/>
            <Route path="/statistics" component={Statistics}/>
            <Route path="/distribute" component={Distribution}/>
        </div>
    );
};

export default App;