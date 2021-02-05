import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TagItem from './item';
import TagList from './list';
import {Tag} from '@services/interfaces';

const tag1: Tag = {
  id: 'tag-1',
  type: 'meal',
  title: 'Lunch',
};

const tag2: Tag = {
  id: 'tag-2',
  type: 'meal',
  title: 'Dinner',
};

const tags: Array<Tag> = [tag1, tag2];

it('render Lunch correctly', () => {
  renderer.create(<TagItem tag={tag1} />);
});

it('render Dinner correctly', () => {
  renderer.create(<TagItem tag={tag2} />);
});

it('Tag List render correctly', () => {
  renderer.create(<TagList tags={tags} />);
});
