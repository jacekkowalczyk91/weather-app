import React from 'react'
import './Weather.css'

class Weather extends React.Component {

    state = {
        weather: null,
        location: ''
    }

    fetchData = (event) => {
        event.preventDefault()
        let location = encodeURIComponent(this.state.location)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=209c0c18886d791519db4cc4308daa95&units=metric`)
            .then(response => response.json())
            .then(
                weather => this.setState({weather})
            )
    }
    handleInputChange = event => {
        this.setState({
            location: event.target.value
        })
    }


    render() {
        const {weather} = this.state
        return (
            <div className='weather-view'>
                <h1>Get weather for your city</h1>
                <form onSubmit={this.fetchData}>
                    <input
                        type='text'
                        placeholder='City name...'
                        value={this.state.location}
                        onChange={this.handleInputChange}
                    />
                    <button
                        type='submit'
                    >Znajdź
                    </button>
                </form>
                {
                    weather &&
                    <React.Fragment>
                        <p>Temperature: {weather.main.temp} C</p>
                        <p>Humidity: {weather.main.humidity}</p>
                        <p>Pressure: {weather.main.pressure}</p>
                        <p>Wind speed: {weather.wind.speed}</p>
                        <img src={'http://openweathermap.org/img/w/'+ weather.weather[0].icon + '.png'} alt={weather.weather[0].description}/>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Weather