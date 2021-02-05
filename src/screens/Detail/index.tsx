import React from 'react';
import {StyleSheet, Text, View, Dimensions, Animated} from 'react-native';
import {Rating} from 'react-native-ratings';
import TagList from '@common-components/Tag/list';
import InstructionList from '@common-components/Instruction/list';
import Nutrition from '@common-components/Nutrition';


import {IMAGE_URL} from '@services/constants';

const {height} = Dimensions.get('window');
const IMAGE_HEIGHT = (2 * height) / 3;

export interface Props {}

const Detail: React.FC<Props> = ({route}: any) => {
  const {recipe} = route.params;
  console.log('re', recipe);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const image =
    recipe.images && recipe.images.vt
      ? {uri: IMAGE_URL + recipe.images.vt}
      : require('@assets/images/recipe-default-image.png');

  React.useEffect(() => {
    // this.changingHeight = scrollY.interpolate({
    //   inputRange: [0, IMAGE_HEIGHT]
    //   outputRange: [120, 10],
    //   extrapolate: "clamp"
    // })
    // route.setParams
    /**
     *
     this.scrollY = new Animated.Value(0);
        this.changingHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [120, 60],
            extrapolate: "clamp"
        });
        this.props.navigation.setParams({
            changingHeight: this.changingHeight
        });
     */
  }, []);
  const renderImage = () => {
    const transform = scrollY.interpolate({
      inputRange: [0, IMAGE_HEIGHT],
      outputRange: [1, 1.1],
    });

    return (
      <Animated.Image
        style={{
          ...styles.image,
          transform: [{scale: transform}],
        }}
        source={image}
        resizeMode={'stretch'}
      />
    );
  };

  return (
    <View style={styles.wrapper}>
      <View>{renderImage()}</View>
      <Animated.ScrollView
        style={styles.scrollWrapper}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={1}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{recipe.title}</Text>
          <View style={styles.ratingWrapper}>
            <Rating
              ratingCount={5}
              readonly={true}
              startingValue={recipe.rating}
              imageSize={20}
            />
          </View>
          <View style={styles.timeWrapper}>
            <Text style={styles.time}>{recipe.time.cook + ' Min'}</Text>
            <Text style={styles.time}>|</Text>
            <Text style={styles.difficulty}>
              {recipe.difficulty.rating.toUpperCase()}
            </Text>
          </View>

          <Text style={styles.description}>{recipe.description}</Text>
          <TagList style={styles.tags} tags={recipe.tags} color="#000" />
          <Nutrition nutrition={recipe.nutrition} />
          {recipe.instructionSections &&
          recipe.instructionSections.length > 0 ? (
            <InstructionList instructions={recipe.instructionSections[0]} />
          ) : null}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

Detail.navigationOptions = ({route}: any) => {
  console.log('route is', route);
  return {
    title: route.params.recipe.title,
  };
};

export default Detail;

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#fff'},
  scrollWrapper: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  contentWrapper: {
    paddingHorizontal: 12,
    marginTop: IMAGE_HEIGHT,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  ratingWrapper: {
    alignItems: 'flex-start',
    paddingBottom: 5,
    marginVertical: 8,
  },
  timeWrapper: {
    flexDirection: 'row',
  },
  time: {
    color: '#807e7e',
    paddingRight: 4,
  },
  difficulty: {
    color: '#807e7e',
    paddingLeft: 4,
  },
  description: {},
  tags: {
    marginVertical: 10,
  },
});
