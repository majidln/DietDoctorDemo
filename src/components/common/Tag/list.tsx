import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import TagItem from './item';

export interface Props {
  recipe: any;
}

const TagList: React.FC<Props> = ({tags, color = '#00ff00', ...rest}: any) => {
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

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 12,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 18,
    paddingVertical: 10,
  },
  ratingWrapper: {
    alignItems: 'flex-start',
    paddingBottom: 5,
    paddingLeft: 30,
  },
});
