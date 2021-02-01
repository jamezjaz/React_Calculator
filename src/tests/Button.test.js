import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it contains a button', () => {
    const wrapper = shallow(<Button />);
    // eslint-disable-next-line
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
