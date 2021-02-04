import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Props {}

const List: React.FC<Props> = ({}: any) => {
  return (
    <View style={styles.wrapper}>
      <Text>In list</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
