import React from 'react'
import WeatherSearch from "./WeatherSearch";

class Weather extends React.Component {

    state = {
        weather: null
    }

    componentDidMount() {
        fetch(`api.openweathermap.org/data/2.5/weather?id=2172797`)
            .then(response => response.json)
            .then(
                weather => this.setState({weather})
            )
    }

    render() {
        const {weather} = this.state
        return (
            <div>
                <WeatherSearch weather={weather}/>
            </div>
        )
    }
}

export default Weather