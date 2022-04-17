import { PropsWithChildren, useContext } from 'react';
import { applyIsDark, isMatchTheme } from '../../lib/theme';
import { ThemeContext } from '../Providers/ThemeProvider';
import Footer from './Footer';
import Header from './Header';
import Overlay from './Overlay';
import Sidebar from './Sidebar';

export default function Layout({ children }: PropsWithChildren<{}>) {
  const themeContext = useContext(ThemeContext);
  const applyTheme = () => {
    const isDark = themeContext.isDark;
    if (isMatchTheme(isDark)) return;
    themeContext.setIsDark(isDark);
    applyIsDark(isDark);
  };

  return (
    <div
      className='mx-auto text-gray-500 dark:text-gray-400'
      onLoad={applyTheme}
    >
      <Header />
      <div className='flex justify-center'>
        <Sidebar />
        <Overlay />
        <main className='mx-3 lg:max-w-xl xl:max-w-3xl'>{children}</main>
      </div>
      <Footer />
    </div>
  );
}