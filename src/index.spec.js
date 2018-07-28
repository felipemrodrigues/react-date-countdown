import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Countdown from './'

configure({ adapter: new Adapter() })

describe('<Countdown />', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Countdown finalDate="2018-07-16T00:00:00Z"  />)
    })

    it('should render the component if finalDate is true', () => {
        expect(wrapper.find('div')).toHaveLength(1)
    })
})