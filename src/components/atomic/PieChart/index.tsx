import React from 'react';
import {requireNativeComponent, Platform} from 'react-native';

const ChartView = requireNativeComponent(
  Platform.OS === 'ios' ? 'ChartView' : 'PiChartView',
);

export interface Props {
  data: Array<Number>;
  colors?: Array<String>;
}

export const PieChart: React.FC<Props> = ({data, colors, ...rest}: any) => {
  return (
    <ChartView
      data={data}
      colors={colors}
      onChange={(event) =>
        console.log('onSelectIndex', event.nativeEvent.selectedIndex)
      }
      selectedIndex={1}
      {...rest}
    />
  );
};
