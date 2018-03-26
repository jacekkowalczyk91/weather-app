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
                </form>
            </div>
        )
    }
}

export default WeatherSearch