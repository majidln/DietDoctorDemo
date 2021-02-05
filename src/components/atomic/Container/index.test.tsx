import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Container} from './index';

it('Container render correctly', () => {
  renderer.create(<Container />);
});

it('Container Snapshot renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
