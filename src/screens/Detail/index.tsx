import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export interface Props {}

const Detail: React.FC<Props> = ({route}: any) => {
  const {recipe} = route.params;

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.dietdoctor.com/' + recipe.images.hz,
        }}
        resizeMode={'cover'}
      />
      <Text>In Detail</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 400,
  },
});
