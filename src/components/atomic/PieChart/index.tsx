import React from 'react';
import {requireNativeComponent, Platform} from 'react-native';

const ChartView = requireNativeComponent(
  Platform.OS === 'ios' ? 'ChartView' : 'PiChart',
);

export interface Props {
  data: Array<Number>;
}

export const PieChart: React.FC<Props> = ({data, ...rest}: any) => {
  console.log('chart view', ChartView);
  // if (Platform.OS === 'android') {
  //   return null;
  // }
  return <ChartView data={data} {...rest} />;
};
