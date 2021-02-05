import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Item from './item';

export interface Props {
  recipe: any;
}

const HomeList: React.FC<Props> = ({recipes, onSelect, ...rest}: any) => {
  console.log('recipes', recipes);
  return (
    <View {...rest}>
      <FlatList
        style={styles.listWrapper}
        data={recipes}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
          <Item recipe={item} onSelect={() => onSelect(item)} />
        )}
      />
    </View>
  );
};

export default HomeList;

const styles = StyleSheet.create({
  listWrapper: {
    paddingLeft: 20,
  },
});
