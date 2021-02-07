import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import t from '@services/translate';

export interface Props {
  nutrition: any;
  percentages: any;
  onSelect: Function;
  selected: String;
}

const NutritionItem: React.FC<Props> = ({
  nutrition,
  percentages,
  onSelect,
  selected,
}: any) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles.wrapper} onPress={() => onSelect()}>
      <View style={styles.nameWrapper}>
        {['carbs', 'fat', 'protein'].includes(nutrition[0]) ? (
          <View
            style={{...styles.circle, backgroundColor: colors[nutrition[0]]}}>
            {selected === nutrition[0] ? <View style={styles.inner} /> : null}
          </View>
        ) : (
          <View style={styles.emptyBlock} />
        )}
        <Text style={styles.title}>{nutrition[0]}</Text>
      </View>
      <View style={styles.value}>
        <Text style={styles.mass}>
          {t.t('detail.mass', {value: Number.parseInt(nutrition[1])})}
        </Text>
        {percentages[nutrition[0]] ? (
          <Text style={styles.percentage}>
            {t.t('detail.percent', {value: percentages[nutrition[0]]})}{' '}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default NutritionItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 8,
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  emptyBlock: {
    width: 24,
  },
  title: {
    paddingHorizontal: 4,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mass: {},
  percentage: {
    paddingHorizontal: 8,
  },
});
