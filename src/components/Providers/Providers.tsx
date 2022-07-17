import { ThemeProvider } from 'next-themes';
import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { createClient } from '~/lib/apollo';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute='class'>
      <ApolloProvider client={createClient()}>{children}</ApolloProvider>
    </ThemeProvider>
  );
};
