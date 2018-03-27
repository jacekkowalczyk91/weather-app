import React from 'react'
import WeatherSearch from "./WeatherSearch";
import './Weather.css'

class Weather extends React.Component {

    state = {
        weather: null,
        SearchInput: ''

    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=209c0c18886d791519db4cc4308daa95`)
            .then(response => response.json())
            .then(
                weather => this.setState({weather})
            )
    }


    render() {
        const {weather} = this.state
        return (
            <div className='weather-view'>
                <h1>Get weather for your city</h1>
                <WeatherSearch/>
                {
                    weather &&
                    <React.Fragment>
                        <p>{weather.main.temp}</p>
                        <p>{weather.main.humidity}</p>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Weather