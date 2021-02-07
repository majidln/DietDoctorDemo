import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Section} from './index';

it('Section render correctly', () => {
  renderer.create(<Section title="open up" />);
});

it('Section Snapshot renders correctly', () => {
  const tree = renderer.create(<Section title="open down" />).toJSON();
  expect(tree).toMatchSnapshot();
});
