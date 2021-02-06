import React from 'react';
import {requireNativeComponent, Platform} from 'react-native';

const ChartView = requireNativeComponent('ChartView');

export interface Props {
  data: Array<Number>;
}

export const PieChart: React.FC<Props> = ({data, ...rest}: any) => {
  if (Platform.OS === 'android') {
    return null;
  }
  return <ChartView data={data} {...rest} />;
};
