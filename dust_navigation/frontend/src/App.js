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
    state = {
        airQualitySensor: []
    };

    constructor(props) {
        super(props);
    }

    getDustMap = async() => {
        const {data: {data: {dust_map}}} = await axios.get("/api/sensors");
        this.setState({ dust_map });
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
                        <Sensor
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