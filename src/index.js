import React, { Component } from 'react'

export default class Countdown extends Component {
    constructor(props) {
        super()

        this.oneMinute = 60
        this.oneHour = 60 * this.oneMinute
        this.oneDay = 24 * this.oneHour

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            countdown: '00:00:00'
        }

        this.getTime = this.getTime.bind(this)
        this.getCountDown = this.getCountDown.bind(this)
    }

    addDigit(number) {
        return number >= 10 ? number : '0' + number
    }

    getTime(finalDate) {
        let interval = setInterval(function () {
            const deltaSeconds = (new Date(finalDate) - new Date()) / 1000

            if (deltaSeconds > 0) {
                this.setState({
                    hours: Math.floor((deltaSeconds) / this.oneHour),
                    minutes: Math.floor(((deltaSeconds % this.oneDay) % this.oneHour) / this.oneMinute),
                    seconds: Math.floor(((deltaSeconds % this.oneDay) % this.oneHour) % this.oneMinute),
                    countdown: this.addDigit(hours) + ':' + this.addDigit(minutes) + ':' + this.addDigit(seconds)
                })                
            } else {
                clearInterval(interval)
            }
        }, 1)
    }   

    getCountDown() {
        return this.state.countdown
    }

    render() {
        const { finalDate } = this.props      

        this.getTime(finalDate)        
        return <div>{ this.getCountDown() }</div>
    }
}