import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface Props {
  recipe: any;
}

const TagItem: React.FC<Props> = ({tag}: any) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.title}>{tag.title}</Text>
    </TouchableOpacity>
  );
};

export default TagItem;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00ff00',
    marginHorizontal: 10,
    padding: 4,
  },
  title: {
    color: '#00ff00',
  },
});
