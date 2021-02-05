import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import client from '@services/apollo';
import MainNavigation from '@navigation/index';
import theme from '@services/themes';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={theme}>
        <MainNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
