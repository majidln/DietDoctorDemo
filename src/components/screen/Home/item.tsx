import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {Recipe} from '@services/interfaces';
import {IMAGE_URL} from '@services/constants';

export interface Props {
  recipe: Recipe;
  onSelect: Function;
}

const HomeListItem: React.FC<Props> = ({recipe, onSelect}) => {
  const image =
    recipe.images && recipe.images.hz
      ? {uri: IMAGE_URL + recipe.images.hz}
      : require('@assets/images/recipe-default-image.png');
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onSelect}>
      <Image style={styles.image} source={image} resizeMode={'cover'} />
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.ratingWrapper}>
        <Rating
          ratingCount={5}
          readonly={true}
          startingValue={recipe.rating}
          imageSize={20}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HomeListItem;

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    marginRight: 25,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 18,
    paddingVertical: 10,
  },
  ratingWrapper: {
    alignItems: 'flex-start',
    paddingBottom: 5,
    paddingLeft: 30,
  },
});
