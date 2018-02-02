
import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import TextfieldInput from '../src/components/TextfieldInput'

const wrapper = shallow(<TextfieldInput/>);

describe('(Component) TextfieldInput', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});
