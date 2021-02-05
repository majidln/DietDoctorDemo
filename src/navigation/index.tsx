import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '@screens/Home';
import ListScreen from './../screens/List';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
