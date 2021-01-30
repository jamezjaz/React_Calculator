import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('it renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});