
import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ChooseLocation from '../src/components/ChooseLocation'

const wrapper = shallow(<ChooseLocation/>);

describe('(Component) ChooseLocation', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});
