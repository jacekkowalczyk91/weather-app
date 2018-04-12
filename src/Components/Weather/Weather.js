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
            .then(response => {
                if(response.ok){
                    return response.json()
                }else{
                    throw new Error('Something went wrong')
                }
            })
            .then(
                weather => this.setState({weather})
            ).catch((error) => {
            console.log(error)
            alert('Nieprawidłowe dane')
        })
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

                <form
                    onSubmit={this.fetchData}
                    className='weather-form'>
                    <input
                        className='textField'
                        type='text'
                        placeholder='City name...'
                        value={this.state.location}
                        onChange={this.handleInputChange}
                    />
                    <button
                        type='submit'
                    >Get
                    </button>
                </form>
                {
                    weather &&
                    <React.Fragment>
                        <div className='weather-single-view'>
                            <p className='weather-single-view-city'>City: {weather.name}</p>
                            <p className='weather-single-view-temp'>Temperature: {weather.main.temp} C</p>
                            <p className='weather-single-view-hum'>Humidity: {weather.main.humidity} %</p>
                            <p className='weather-single-view-press'>Pressure: {weather.main.pressure} HPa</p>
                            <p className='weather-single-view-wind'>Wind speed: {weather.wind.speed} m/s</p>
                            <img src={'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'}
                                 alt={weather.weather[0].description}
                                 className='weather-single-view-img'/>
                        </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Weather