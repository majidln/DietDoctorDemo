import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Tag} from '@services/interfaces';

export interface Props {
  tag: Tag;
  color?: String;
  [x: string]: any;
}

const TagItem: React.FC<Props> = ({tag, color = '#00ff00', ...rest}: any) => {
  return (
    <TouchableOpacity {...rest} style={{...styles.wrapper, borderColor: color}}>
      <Text style={{...styles.title, color}}>{tag.title}</Text>
    </TouchableOpacity>
  );
};

export default TagItem;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 4,
  },
  title: {},
});
