import React from 'react';
import {requireNativeComponent} from 'react-native';
const ChartView = requireNativeComponent('ChartView');

export interface Props {
  data: Array<Number>;
}

export const PieChart: React.FC<Props> = ({data, ...rest}: any) => {
  return <ChartView data={data} {...rest} />;
};
