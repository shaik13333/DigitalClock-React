import React, { Component } from 'react';
import "./DigitalClock.css"
class DigitalClock extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toLocaleTimeString() }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.updateClock()
        }, 1000)
    }

    updateClock() {
        this.setState({ time: new Date().toLocaleTimeString() })
    }

    render() {
        return (

            // Inside your DigitalClock render method
            <div className="clock-container">
                <div className="clock">
                    <p className="Time">{this.state.time}</p>
                </div>
            </div>

        );
    }
}

export default DigitalClock;