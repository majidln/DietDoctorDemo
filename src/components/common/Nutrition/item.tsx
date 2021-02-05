import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Props {
  nutrition: any;
  percentages: any;
}

const NutritionItem: React.FC<Props> = ({nutrition, percentages}: any) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.circle} />
      <Text>{nutrition[0]}</Text>
      <View style={styles.value}>
        <Text>{Number.parseInt(nutrition[1])}g</Text>
        {percentages[nutrition[0]] ? (
          <Text style={styles.percentage}>{percentages[nutrition[0]]}%</Text>
        ) : null}
      </View>
    </View>
  );
};

export default NutritionItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#70c59b',
  },
  title: {},
  value: {
    flexDirection: 'row',
  },
  percentage: {
    paddingHorizontal: 8,
  },
});
