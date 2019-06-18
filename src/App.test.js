import React from 'react';
import {App} from './App';
import { shallowToJson } from 'enzyme-to-json';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('App test cases', () => {
  let output;
  beforeEach(() => {
    output = shallow(
      <App alert={{visible:true}}/>
    );
  });

  afterEach(() => {
    output = null;
  });

  it('should render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should have Router element', () => {
    expect(output.find('Router').length).toEqual(1);
  });

});