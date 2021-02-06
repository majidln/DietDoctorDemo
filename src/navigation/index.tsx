import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import t from '@services/translate';
import HomeScreen from '@screens/Home';
import ListScreen from './../screens/List';
import DetailScreen from './../screens/Detail';

import {Recipe} from '@services/interfaces';

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Detail: {recipe: Recipe};
};

const Stack = createStackNavigator<RootStackParamList>();

function MainNavigation() {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t.t('home.pageTitle'),
        }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: t.t('list.pageTitle'),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({route}) => {
          return {
            title: route.params.recipe?.title,
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
