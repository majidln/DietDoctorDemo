import React from 'react';
import {StyleSheet, Text, Image, TouchableHighlight, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import TagList from '@common-components/Tag/list';

export interface Props {
  recipe: any;
}

const HomeListItem: React.FC<Props> = ({recipe}: any) => {
  return (
    <TouchableHighlight style={styles.wrapper}>
      <View>
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
    paddingBottom: 5,
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
