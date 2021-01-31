import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import Nav from '../components/Nav';

describe('<Nav />', () => {
  it('it contains <strong> element', () => {
    const wrapper = shallow(<Nav />);
    const ul = wrapper.find('.nav-links');
    const li = <li>Home</li>
    expect(ul.containsMatchingElement(li)).toBe(true);
  });
});