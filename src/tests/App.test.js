import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import App from '../components/App';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

it('it renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<App />', () => {
  it('renders Display correctly', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find(Display)).toHaveLength(1);
  });
});

describe('<App />', () => {
  it('renders ButtonPanel correctly', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find(ButtonPanel)).toHaveLength(1);
  });
});