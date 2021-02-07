import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';
import {Section} from './index';

it('Section render correctly', () => {
  renderer.create(<Section title="open up" />);
});

it('Section Snapshot renders correctly', () => {
  const tree = renderer.create(<Section title="open down" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Section click on show more', async () => {
  const {findByTestId} = render(<Section title="open down" />);

  const button = await findByTestId('sectionButton');
  fireEvent.press(button);
});
