import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';

import HomeScreen from '@screens/Home';
import ListScreen from './../screens/List';
import DetailScreen from './../screens/Detail';

const Stack = createStackNavigator();

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
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreen.navigationOptions}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={ListScreen.navigationOptions}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={DetailScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
