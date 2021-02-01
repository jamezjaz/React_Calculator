import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../components/Display';

describe('<Display />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Display result="0" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders texts correctly on Display', () => {
    const { getByText } = render(<Display result="1.5" />);
    const displayResult = getByText(/1.5/i);
    expect(displayResult).toBeInTheDocument();
  });
});
