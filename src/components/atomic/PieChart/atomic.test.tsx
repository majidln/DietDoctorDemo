import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {PieChart} from './index';

it('PieChart render correctly', () => {
  renderer.create(<PieChart data={[55, 45]} />);
});

it('PieChart Snapshot renders correctly', () => {
  const tree = renderer.create(<PieChart data={[55, 45]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
