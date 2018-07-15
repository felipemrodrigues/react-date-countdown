import React, { Component } from 'react'

export default class Countdown extends Component {
    constructor(props) {
        super()

        this.oneMinute = 60;
        this.oneHour = 60 * this.oneMinute;
        this.oneDay = 24 * this.oneHour;    
    }

    addDigit(number) {
        return number >= 10 ? number : '0' + number;
    }   

    render() {
        // const { finalDate } = this.props

        // let interval = setInterval(function () {
        //     var deltaSeconds = (new Date(finalDate) - new Date()) / 1000;

        //     if (deltaSeconds > 0) {
        //         let hours = Math.floor((deltaSeconds) / this.oneHour);
        //         let minutes = Math.floor(((deltaSeconds % this.oneDay) % this.oneHour) / this.oneMinute);
        //         let seconds = Math.floor(((deltaSeconds % this.oneDay) % this.oneHour) % this.oneMinute);

        //         return <span>{ this.addDigit(hours) + ':' + this.addDigit(minutes) + ':' + this.addDigit(seconds) }</span>                   
        //     }
        //     return <span>00:00:00</span>
        //     clearInterval(interval);
        // }, 1);    


        return <span>Test</span>
    }
}