import React from 'react';
import {
  requireNativeComponent,
  Platform,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const RNChartView = requireNativeComponent(
  Platform.OS === 'ios' ? 'ChartView' : 'ChartView',
);

export interface Props {
  data: Array<Number>;
  colors?: Array<String>;
}

export const PieChart: React.FC<Props> = ({data, colors, ...rest}: any) => {
  const [index, setIndex] = React.useState(0);
  return (
    <View>
      <RNChartView
        data={data}
        colors={colors}
        onSelectedItem={(event) =>
          console.log(
            'onSelectIndex',
            setIndex(event.nativeEvent.selectedIndex),
          )
        }
        selectedIndex={index}
        {...rest}
      />
      <TouchableOpacity onPress={() => setIndex(index + 1)}>
        <Text>Incccc</Text>
      </TouchableOpacity>
    </View>
  );
};
