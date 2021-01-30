import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

it('renders correctly', () => {
  const tree = renderer
    .create(<Display result='0' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});