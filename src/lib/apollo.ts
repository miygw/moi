import { githubConfigs } from '~/constants/githubConfigs';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { isClient, isDevelopment } from './env';

export const createClient = () => {
  const token = getToken();

  return new ApolloClient({
    uri: githubConfigs.graphql.endpoint,
    headers: { authorization: `Bearer ${token}` },
    cache: new InMemoryCache(),
  });
};

const getToken = () => {
  if (isClient() && !isDevelopment()) return undefined;
  return isClient()
    ? process.env.NEXT_PUBLIC_GITHUB_TOKEN
    : process.env.GITHUB_TOKEN;
};
