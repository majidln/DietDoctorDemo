import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Props {
  instruction: String;
  step: Number;
}

const InstructionItem: React.FC<Props> = ({instruction, step}) => {
  return (
    <View style={{...styles.wrapper}}>
      <View style={styles.stepWrapper}>
        <Text style={styles.step}>{step}</Text>
      </View>
      <Text style={styles.title}>{instruction}</Text>
    </View>
  );
};

export default InstructionItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  stepWrapper: {
    marginHorizontal: 10,
    backgroundColor: '#70c59b',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    flex: 1,
  },
});
