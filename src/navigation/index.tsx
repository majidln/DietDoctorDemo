import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '@screens/Home';
import ListScreen from './../screens/List';
import DetailScreen from './../screens/Detail';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
