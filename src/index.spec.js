import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Countdown from './'

configure({ adapter: new Adapter() })

describe('<Countdown />', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Countdown  />)
    })

    it('renders div if finalDate is true', () => {
        wrapper.setProps({ finalDate: '2018-07-16T00:00:00Z' })
        expect(wrapper.find('div')).toHaveLength(1)
    })
})