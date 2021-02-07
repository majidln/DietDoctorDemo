import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import InstructionItem from './item';
import {Instruction} from '@services/interfaces';
import t from '@services/translate';
import {useTheme} from '@react-navigation/native';

export interface Props {
  instructions: Array<Instruction>;
}

const InstructionList: React.FC<Props> = ({instructions}) => {
  const {colors} = useTheme();
  if (!(instructions && instructions.length > 0)) {
    return null;
  }

  const renderInstructionList = (instruction: Instruction) => {
    return (
      <>
        {instruction.steps.map((item, index) => (
          <InstructionItem key={index} instruction={item} step={index + 1} />
        ))}
      </>
    );
  };

  return (
    <View style={styles.wrapper}>
      {instructions.map((instruction, index) => {
        return (
          <View key={index}>
            {instructions.length > 1 ? (
              <Text style={{...styles.title, backgroundColor: colors.primary}}>
                {instruction.title
                  ? instruction.title
                  : t.t('instruction.itemTitle', {number: index + 1})}
              </Text>
            ) : null}
            {renderInstructionList(instruction)}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  title: {
    padding: 8,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 8,
  },
});

export default InstructionList;
