import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { UIProvider } from './UIProvider';

export const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider attribute='class'>
      <UIProvider>{children}</UIProvider>
    </ThemeProvider>
  );
};
