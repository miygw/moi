import { PropsWithChildren } from 'react';
import PageTitleProvider from './PageTItleProvider';
import SidebarStateProvider from './SidebarStateProvider';
import ThemeProvider from './ThemeProvider';

export default function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <PageTitleProvider>
      <ThemeProvider>
        <SidebarStateProvider>{children}</SidebarStateProvider>
      </ThemeProvider>
    </PageTitleProvider>
  );
}
