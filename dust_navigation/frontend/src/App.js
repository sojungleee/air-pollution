import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

import geohash from './pages/geohash.json';


// import js files
import Dust_map from './pages/Dust_map';
import Ranking from './pages/Ranking';
import Cry from './pages/cry'
import Navigation from './pages/Navigation';
import { CgSidebar } from 'react-icons/cg';

class App extends React.Component {
    state = {
        airQualitySensor: []
    };

    constructor(props) {
        super(props);
    }

    getDustMap = async() => {
        // const {data: {data: {dust_map}}} = await axios.get("/api/sensors");
        // this.setState({ dust_map });
        console.log(geohash[0].geohash);
        const {data: {sensors: {airQualitySensor}}} = await axios.get(geohash);
        this.setState({ airQualitySensor });

        // const res = await fetch(geohash);
        // const data = await res.json();
        // this.setState({data: {data: {dust_map}}});

    //    const res = await fetch(geohash);
    //    const bata = await res.json();
    //    return this.setState(
    //         {data:bata}
    //     );
    }

    componentDidMount() {
        this.getDustMap();
    }

    render() {
        const { airQualitySensor } = this.state;
        return (
            <div className="App"> 
                <Route path="/" exact={true} component={Dust_map}/>
                <Route path="/ranking" component={Ranking}/>
                <Route path="/navigation" component={Navigation}/>  

                <div class="dust_map">
                    {airQualitySensor.map(dm => (
                        <Cry
                            key={dm.air_quality_sensor_id}
                            id={dm.air_quality_sensor_id}
                            device={dm.device_id}
                            co={dm.co}
                            pm10={dm.pm10}
                            pm25={dm.pm25}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;