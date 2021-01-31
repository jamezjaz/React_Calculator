import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import Home from '../components/Home';

describe('<Home />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('it contains a h2 element', () => {
    let wrapper = shallow(<Home />);
    const h2 = <h2>Hello there!</h2>;
    expect(wrapper.containsMatchingElement(h2)).toBe(true);
  });

  it('h2 element has a text', () => {
    let wrapper = shallow(<Home />);
    const h2 = wrapper.find('.heading');
    expect(h2.text()).toEqual('Hello there!');
  });

  it('should fail if the text on the h2 element is incorrect', () => {
    let wrapper = shallow(<Home />);
    const h2Text = <h2>Hey there!</h2>;
    expect(wrapper.containsMatchingElement(h2Text)).toBe(false);
  });
});