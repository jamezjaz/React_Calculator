import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Button from '../components/Button';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {

  it('renders correctly', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it contains a button', () => {
    let wrapper = shallow(<Button />);
    const button = <button></button>;
    expect(wrapper.containsMatchingElement(button)).toBe(true);
  });

  it('renders the button texts correctly', () => {
    const { getByText } = render(<Button name="÷" />);
    const divButton = getByText(/÷/i);
    expect(divButton).toBeInTheDocument();
  });

  it('the buttons play the role of buttons', () => {
    const { getByRole } = render(<Button name="÷" />);
    const divButton = getByRole('button');
    expect(divButton).toBeInTheDocument();
  });
});