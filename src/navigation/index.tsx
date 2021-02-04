import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './../screens/List'

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
  );
}

export default MainNavigation;