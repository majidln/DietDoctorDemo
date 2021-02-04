import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Props {}

const Detail: React.FC<Props> = ({}: any) => {
  return (
    <View style={styles.wrapper}>
      <Text>In Detail</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
