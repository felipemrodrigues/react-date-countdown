import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Countdown from './'

configure({ adapter: new Adapter() })

describe('<Countdown />', () => {
  let wrapper

  beforeEach(() => {
      wrapper = shallow(<Countdown finalDate="2018-07-31T00:00:00Z"  />)
  })

  it('should render the component if finalDate is true', () => {
      expect(wrapper.find('div')).toHaveLength(1)
  })

  it('should add a class if className is true', () => {
    wrapper.setProps({ className: 'test' })
    expect(wrapper.find("div").hasClass("test")).toEqual(true)
  })

  it("should add a digit if number is lower than 10", () => {
    expect(wrapper.instance().addDigit(9)).toBe('09')
  })

  it("should add no digit if number is greater than 10", () => {
    expect(wrapper.instance().addDigit(12)).toBe(12)
  })

  it("should add no digit if number is equal 10", () => {
    expect(wrapper.instance().addDigit(10)).toBe(10)
  })
})
