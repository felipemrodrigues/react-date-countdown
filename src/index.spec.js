import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'

import Countdown from './'

it('should be a function', () => {
    expect(Countdown).to.be.a('function')
})