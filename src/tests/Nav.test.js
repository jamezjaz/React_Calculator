import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import Nav from '../components/Nav';

describe('<Nav />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('<ul> element has a <li> element', () => {
    const ul = wrapper.find('.nav-links');
    const li = <li>Home</li>
    expect(ul.containsMatchingElement(li)).toBe(true);
  });

  it('should fail if <li> text incorrect', () => {
    const ul = wrapper.find('.nav-links');
    const li = <li>About</li>
    expect(ul.containsMatchingElement(li)).toBe(false);
  });

  it('h2 element has a text', () => {
    const h2 = wrapper.find('.logo');
    expect(h2.text()).toEqual('Math Magicians');
  });

  it('should fail if <h2> text is incorrect', () => {
    const h2Text = <h2>Maths Magicians</h2>;
    expect(wrapper.containsMatchingElement(h2Text)).toBe(false);
  });
});
