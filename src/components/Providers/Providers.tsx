import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import PageTitleProvider from './PageTItleProvider';
import SidebarStateProvider from './SidebarStateProvider';

export default function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <PageTitleProvider>
      <ThemeProvider attribute='class'>
        <SidebarStateProvider>{children}</SidebarStateProvider>
      </ThemeProvider>
    </PageTitleProvider>
  );
}
