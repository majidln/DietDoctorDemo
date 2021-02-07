import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ApolloProvider} from '@apollo/client';
import client from '@services/apollo';
import Home from './index';

it('renders Home correctly', () => {
  renderer.create(
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>,
  );
});
