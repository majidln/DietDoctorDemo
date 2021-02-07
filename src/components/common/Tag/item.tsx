import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Tag} from '@services/interfaces';
import {useTheme} from '@react-navigation/native';

export interface Props {
  tag: Tag;
  color?: String;
  [x: string]: any;
}

const TagItem: React.FC<Props> = ({tag, color, ...rest}: any) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      {...rest}
      style={{...styles.wrapper, borderColor: color || colors.primary}}>
      <Text style={{...styles.title, color: color || colors.primary}}>
        {tag.title}
      </Text>
    </TouchableOpacity>
  );
};

export default TagItem;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  title: {},
});
