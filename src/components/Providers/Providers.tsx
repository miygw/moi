import { PropsWithChildren } from 'react';
import SidebarStateProvider from './SidebarStateProvider';
import ThemeProvider from './ThemeProvider';

export default function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider>
      <SidebarStateProvider>{children}</SidebarStateProvider>
    </ThemeProvider>
  );
}
