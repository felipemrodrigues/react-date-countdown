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
            const delta = (new Date(finalDate) - new Date())
            const seconds = delta / 1000
            const MINUTE = 60
            const HOUR = 60 * MINUTE
            const DAY = 24 * HOUR

            if (seconds > 0) {
                this.setState({
                    hours: this.addDigit(Math.floor((seconds) / HOUR)),
                    minutes: this.addDigit(Math.floor(((seconds % DAY) % HOUR) / MINUTE)),
                    seconds: this.addDigit(Math.floor(((seconds % DAY) % HOUR) % MINUTE))
                })
            } else {
                clearInterval(this.getTime())
            }
        }, 1)
    }

    render() {
        const { finalDate, className } = this.props

        this.getTime(finalDate)
        return (
            <div className={ className }>
                { this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds }
            </div>
        )
    }
}
