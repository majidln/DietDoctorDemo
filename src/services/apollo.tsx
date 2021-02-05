import {ApolloClient, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache({
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
  uri: 'https://ddapi.production.dietdoctor.com/v1',
  cache,
});

export default client;
