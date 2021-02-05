import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {PieChart} from '@atomic-components/index';
import NutritionItem from './item';
import {Nutrition} from '@services/interfaces';

export interface Props {
  nutrition: Nutrition;
}

const Nutrition: React.FC<Props> = ({nutrition}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Nutrition</Text>
      <View style={styles.contentWrapper}>
        <View style={styles.listWrapper}>
          {Object.entries(nutrition.values).map((item, index) => {
            if (item[0] === '__typename') {
              return null;
            }
            return (
              <NutritionItem
                key={index}
                nutrition={item}
                percentages={nutrition.percentages}
              />
            );
          })}
        </View>
        <View style={styles.chartWrapper}>
          <PieChart
            style={styles.chart}
            data={Object.entries(nutrition.percentages).map((item) =>
              item[0] !== '__typename' ? item[1] : 0,
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Nutrition;

const styles = StyleSheet.create({
  wrapper: {},
  title: {},
  contentWrapper: {
    flexDirection: 'row',
  },
  listWrapper: {
    flex: 2,
  },
  chartWrapper: {
    flex: 1,
  },
  chart: {
    flex: 1
  }
});
