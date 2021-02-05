import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface Props {
  recipe: any;
}

const TagItem: React.FC<Props> = ({tag, color}: any) => {
  return (
    <TouchableOpacity style={{...styles.wrapper, borderColor: color}}>
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
