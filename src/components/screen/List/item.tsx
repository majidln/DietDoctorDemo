import React from 'react';
import {StyleSheet, Text, Image, TouchableHighlight, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import TagList from '@common-components/Tag/list';
import {Recipe} from '@services/interfaces';
import {IMAGE_URL} from '@services/constants';

export interface Props {
  recipe: Recipe;
  [x: string]: any;
}

const HomeListItem: React.FC<Props> = ({recipe, ...rest}) => {
  const image =
    recipe.images && recipe.images.hz
      ? {uri: IMAGE_URL + recipe.images.hz}
      : require('@assets/images/recipe-default-image.png');
  return (
    <TouchableHighlight {...rest} style={styles.wrapper} underlayColor={'#fff'}>
      <View>
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
        <TagList tags={recipe.tags} />
      </View>
    </TouchableHighlight>
  );
};

export default HomeListItem;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 12,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginVertical: 8,
    justifyContent: 'space-between',
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    borderWidth: 1,
    borderColor: 'lightgray',
    elevation: 9,
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
