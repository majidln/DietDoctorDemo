import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

interface Props {
  title: String;
}

export const Section: React.FC<Props> = ({title, children}: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.toolbar}
        onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    height: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
});
