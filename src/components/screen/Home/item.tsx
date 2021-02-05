import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';

export interface Props {
  recipe: any;
}

const HomeListItem: React.FC<Props> = ({recipe}: any) => {
  console.log('recipe.ranking', recipe.rating);
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.dietdoctor.com/' + recipe.images.hz,
        }}
        resizeMode={'cover'}
      />
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
