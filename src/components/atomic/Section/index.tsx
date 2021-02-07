import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import t from '@services/translate';

interface Props {
  title: String;
}
// TODO add vector icon component for show and hide more
export const Section: React.FC<Props> = ({title, children}: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <View>
      <TouchableOpacity
        testID="sectionButton"
        style={styles.toolbar}
        onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.title}>{title}</Text>
        <Text>
          {t.t(`components.section.${isOpen ? 'hideDetail' : 'showDetail'}`)}
        </Text>
      </TouchableOpacity>
      {isOpen && <View testID="childrenWrapper">{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
});
