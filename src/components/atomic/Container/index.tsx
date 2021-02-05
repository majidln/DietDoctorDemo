import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export interface Props {
  style?: Object;
}

export const Container: React.FC<Props> = ({children, style, ...rest}: any) => {
  return (
    <SafeAreaView style={{...styles.wrapper, ...style}} {...rest}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
});
