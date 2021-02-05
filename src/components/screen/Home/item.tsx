import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export interface Props {
  recipe: any;
}

const HomeListItem: React.FC<Props> = ({recipe}: any) => {
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
});
