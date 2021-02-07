import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface Props {
  children: any;
  [x: string]: any;
}

export const Container: React.FC<Props> = ({children, ...rest}: any) => {
  return (
    <SafeAreaView {...rest} style={{...styles.wrapper, ...rest.style}}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
