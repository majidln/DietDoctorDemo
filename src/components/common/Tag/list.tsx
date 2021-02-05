import React from 'react';
import {FlatList} from 'react-native';
import TagItem from './item';
import {Tag} from '@services/interfaces';

export interface Props {
  tags: Array<Tag>;
  color?: String;
  [x: string]: any;
}

const TagList: React.FC<Props> = ({tags, color, ...rest}: any) => {
  return (
    <FlatList
      {...rest}
      data={tags}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <TagItem color={color} tag={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default TagList;
