import React from 'react';
import {View} from 'react-native';
import InstructionItem from './item';
import {Instruction} from '@services/interfaces';

export interface Props {
  instructions: Array<Instruction>;
}

const Instruction: React.FC<Props> = ({instructions}) => {
  if (!(instructions && instructions.length > 0)) {
    return null;
  }
  // TODO show all instructions
  return (
    <View>
      {instructions[0].steps.map((item, index) => (
        <InstructionItem key={index} instruction={item} step={index + 1} />
      ))}
    </View>
  );
};

export default Instruction;
