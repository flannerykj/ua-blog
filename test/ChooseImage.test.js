import React from 'react'
import { shallow } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon';
import ChooseImage from '../src/components/ChooseImage'

const minProps = {
    onFileChange: () => {},
    remoteFilePath: null
}
describe('(Component) ChooseImage', () => {

  it('renders...', () => {
    const wrapper = shallow(<ChooseImage {...minProps}/>);
    expect(wrapper).to.have.length(1);
  });

  it('has a file input field', () => {
    const wrapper = shallow(<ChooseImage {...minProps}/>);
    expect(wrapper.containsMatchingElement(<input type='file'/>)).to.equal(true);
  });

  it('img preview field is hidden on initial render', () => {
    const wrapper = shallow(<ChooseImage {...minProps}/>);
    expect(wrapper.containsMatchingElement(<img />)).to.equal(false);
  });

  it('calls request and success actions if the fetch response was successful', () => {

  });

  it('input onChange calls the onChange passed as prop', () => {
    const onChangeStub = (e)=>{
      console.log(e);
    };
    const wrapper = shallow(<ChooseImage {...minProps} onFileChange={onChangeStub}/>);
    const inputField = wrapper.find('input');
    const event = {target: {files: [{path: 'dummyfile'}]}};
    inputField.simulate('change', event);
  });

});
