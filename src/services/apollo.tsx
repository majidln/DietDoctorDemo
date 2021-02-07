import 'cross-fetch/polyfill';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {BASE_URL} from '@services/constants';

const cache = new InMemoryCache({
  addTypename: true,
  typePolicies: {
    Query: {
      fields: {
        listRecipes: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            // merge the recipes with existing list
            return {
              ...incoming,
              recipes: [
                ...(existing.recipes ? existing.recipes : []),
                ...incoming.recipes,
              ],
            };
          },
        },
      },
    },
  },
});

// Initialize Apollo Client
const client = new ApolloClient({
  uri: BASE_URL,
  cache,
});

export default client;
