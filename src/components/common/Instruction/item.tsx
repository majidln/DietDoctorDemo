import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Props {
  recipe: any;
}

const InstructionItem: React.FC<Props> = ({instruction, step}: any) => {
  console.log('instruction', instruction);
  return (
    <View style={{...styles.wrapper}}>
      <View style={styles.stepWrapper}>
        <Text style={styles.step}>{step}</Text>
      </View>
      <Text style={{...styles.title}}>{instruction}</Text>
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
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {},
});
