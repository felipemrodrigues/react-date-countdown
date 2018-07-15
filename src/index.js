import React, { Component } from 'react'

export default class Countdown extends Component {
    constructor(props) {
        super()

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    addDigit(number) {
        return number >= 10 ? number : '0' + number
    }

    getTime(finalDate) {
        setInterval(() => {
            const deltaSeconds = (new Date(finalDate) - new Date()) / 1000
            const MINUTE = 60
            const HOUR = 60 * this.oneMinute
            const DAY = 24 * this.oneHour

            if (deltaSeconds > 0) {                
                this.setState({
                    hours: this.addDigit(Math.floor((deltaSeconds) / HOUR)),
                    minutes: this.addDigit(Math.floor(((deltaSeconds % DAY) % HOUR) / MINUTE)),
                    seconds: this.addDigit(Math.floor(((deltaSeconds % DAY) % HOUR) % MINUTE))
                })
            } else {
                clearInterval(this.getTime())
            }
        }, 1)
    }   

    render() {
        const { finalDate } = this.props      

        this.getTime(finalDate)        
        return <div>{this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds }</div>
    }
}
