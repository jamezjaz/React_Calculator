import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonPanel from '../components/ButtonPanel';
import Button from '../components/Button';

Enzyme.configure({ adapter: new Adapter() });

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
