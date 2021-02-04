import {ApolloClient, InMemoryCache} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://ddapi.production.dietdoctor.com/v1',
  cache: new InMemoryCache(),
});

export default client;
