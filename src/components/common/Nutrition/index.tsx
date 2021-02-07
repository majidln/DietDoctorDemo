import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {PieChart} from '@atomic-components/index';
import {Section} from '@atomic-components/index';
import NutritionItem from './item';
import {Ingredient} from '@services/interfaces';
import t from '@services/translate';

export interface Props {
  values: Ingredient;
  percentages: Ingredient;
}

const ingredientsInChart: Array<String> = ['carbs', 'fat', 'protein'];

const NutritionList: React.FC<Props> = ({values, percentages}) => {
  const {colors} = useTheme();
  const [selected, setSelected] = React.useState<String>('carbs');

  const chartData: Array<Number> = [];
  const chartColors: Array<String> = [];
  ingredientsInChart.forEach((ingredient: String) => {
    if (percentages[ingredient]) {
      chartData.push(percentages[ingredient]);
      chartColors.push(colors[ingredient]);
    }
  });

  const onSelect = (item: Array<string>) => {
    setSelected(item[0]);
  };

  const onChartSelect = (index: Number) => {
    const item: String = ingredientsInChart[index];
    setSelected(item);
  };

  const selectedItem: Number = ingredientsInChart.indexOf(selected);

  return (
    <Section title={t.t('nutrition.title')}>
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.listWrapper}>
            {Object.entries(values).map((item, index) => {
              if (item[0] === '__typename') {
                return null;
              }
              return (
                <NutritionItem
                  key={index}
                  nutrition={item}
                  percentages={percentages}
                  onSelect={() => onSelect(item)}
                  selected={selected}
                />
              );
            })}
          </View>
          <View style={styles.chartWrapper}>
            <PieChart
              data={chartData}
              colors={chartColors}
              selectedIndex={selectedItem}
              onSelect={(index: Number) => onChartSelect(index)}
            />
          </View>
        </View>
      </View>
    </Section>
  );
};

export default NutritionList;

const styles = StyleSheet.create({
  wrapper: {},
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
    flex: 1,
  },
});
