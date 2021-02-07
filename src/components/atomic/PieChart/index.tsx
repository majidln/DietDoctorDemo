import React from 'react';
import {requireNativeComponent, Platform, StyleSheet} from 'react-native';

const RNChartView = requireNativeComponent(
  Platform.OS === 'ios' ? 'ChartView' : 'ChartView',
);

interface Props {
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
  return (
    <RNChartView
      testID="pieChart"
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
