import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import InstructionItem from './item';

export interface Props {
  recipe: any;
}

const Instruction: React.FC<Props> = ({instructions}: any) => {
  console.log('instructions', instructions);
  return (
    <FlatList
      data={instructions.steps}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item, index}) => (
        <InstructionItem instruction={item} step={index + 1} />
      )}
    />
  );
};

export default Instruction;

// const styles = StyleSheet.create({});
