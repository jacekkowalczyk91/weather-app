import React from 'react'

class WeatherSearch extends React.Component {

    state = {
        inputValue: ''
    }

    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmitChange = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        placeholder='Write city name...'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button
                        onSubmit={this.handleSubmitChange}
                    >Znajdź</button>
                </form>
                {
                    this.props.weather && this.props.weather.map(
                        ({id, main}) => (
                            <p key={id}>{main}</p>
                        )
                    )
                }
            </div>
        )
    }
}

export default WeatherSearch