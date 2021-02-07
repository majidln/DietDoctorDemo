import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApolloProvider} from '@apollo/client';
import client from '@services/apollo';
import Detail from './index';

it('renders Detail correctly', async () => {
  const {findByTestId} = render(
    <ApolloProvider client={client}>
      <Detail />
    </ApolloProvider>,
  );

  const button = await findByTestId('sectionButton');
  fireEvent.press(button);
});
