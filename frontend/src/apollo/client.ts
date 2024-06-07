import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'http://95.213.248.225:4001/',
  // uri: 'http://backend:4000',
  uri: 'https://souzmultapi.ru/api',
  cache: new InMemoryCache()
});

export default client;
