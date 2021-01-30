import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

it('renders correctly', () => {
  const tree = renderer
    .create(<ButtonPanel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});