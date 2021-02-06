import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Item from './item';
import {Recipe} from '@services/interfaces';

interface Props {
  recipes: Array<Recipe>;
  onSelect?: Function;
  [x: string]: any;
}

const HomeList: React.FC<Props> = ({recipes, onSelect, ...rest}: any) => {
  return (
    <View>
      <FlatList
        {...rest}
        testID="homeListRecipes"
        style={styles.listWrapper}
        data={recipes}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item, index}) => (
          <Item
            testID={'homeListRecipesItem-' + index}
            recipe={item}
            onSelect={() => onSelect(item)}
          />
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
