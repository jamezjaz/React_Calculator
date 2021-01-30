import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import ButtonPanel from '../components/ButtonPanel';
import Button from '../components/Button';

describe('<ButtonPanel />', () => {

  it('renders correctly', () => {
    const tree = renderer
      .create(<ButtonPanel />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a total of 19 buttons', () => {
    const buttonPanel = shallow(<ButtonPanel />);
    expect(buttonPanel.find(Button)).toHaveLength(19);
  });
});