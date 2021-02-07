import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {PieChart} from './index';

it('PieChart render correctly', () => {
  renderer.create(
    <PieChart
      data={[55, 20, 25]}
      colors={['#ff0000', '#00ff00', '#0000ff']}
      selectedIndex={1}
      onSelect={() => {}}
    />,
  );
});

it('PieChart Snapshot renders correctly', () => {
  const tree = renderer
    .create(
      <PieChart
        data={[55, 20, 25]}
        colors={['#ff0000', '#00ff00', '#0000ff']}
        selectedIndex={1}
        onSelect={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
