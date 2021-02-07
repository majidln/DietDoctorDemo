import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ApolloProvider} from '@apollo/client';
import client from '@services/apollo';
import List from './index';

it('renders List correctly', () => {
  renderer.create(
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>,
  );
});
