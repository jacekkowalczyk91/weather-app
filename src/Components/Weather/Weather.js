import React from 'react'
import WeatherSearch from "./WeatherSearch";

class Weather extends React.Component {

    state = {
        weather: null
    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=209c0c18886d791519db4cc4308daa95`)
            .then(response => response.json)
            .then(
                weather => this.setState({weather})
            )
    }




    render() {
        const {weather} = this.state
        return (
            <div>
                <WeatherSearch/>
                {
                    console.log(weather)
                }
            </div>
        )
    }
}

export default Weather