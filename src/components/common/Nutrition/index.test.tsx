import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NutritionItem from './item';
import NutritionList from './index';
import {Nutrition} from '@services/interfaces';

const nutrition: Nutrition = {
  values: {
    carbs: 8.7311134599156,
    fat: 78.788152236287,
    protein: 28.807684599156,
    fiber: 4.58825,
    calories: 868.05756329114,
  },
  percentages: {
    carbs: 4.06,
    fat: 82.52,
    protein: 13.41,
  },
};

it('Nutrition Item render correctly', () => {
  renderer.create(
    <NutritionItem
      nutrition={Object.entries(nutrition.values)}
      percentages={nutrition.percentages}
      onSelect={() => {}}
      selected={'carbs'}
    />,
  );
});

it('Nutrition List render correctly', () => {
  renderer.create(
    <NutritionList
      values={nutrition.values}
      percentages={nutrition.percentages}
    />,
  );
});
