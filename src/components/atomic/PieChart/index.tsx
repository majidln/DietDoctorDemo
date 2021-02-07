import React from 'react';
import {requireNativeComponent, Platform, StyleSheet} from 'react-native';

const RNChartView = requireNativeComponent(
  Platform.OS === 'ios' ? 'ChartView' : 'ChartView',
);

export interface Props {
  data: Array<Number>;
  colors: Array<String>;
  selectedIndex: Number;
  onSelect: Function;
}

export const PieChart: React.FC<Props> = ({
  data = [],
  colors = [],
  selectedIndex = 0,
  onSelect,
  ...rest
}: any) => {
  console.log('selectedIndex', selectedIndex);
  return (
    <RNChartView
      style={styles.wrapper}
      data={data}
      colors={colors}
      onSelectedItem={(event: any) => {
        onSelect(event.nativeEvent.selectedIndex);
      }}
      selectedIndex={selectedIndex}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
