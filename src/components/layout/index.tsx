import { PropsWithChildren, useContext } from 'react';
import { applyIsDark, isMatchTheme } from '../../lib/theme';
import { ThemeContext } from '../provider/ThemeProvider';
import Footer from './Footer';
import Header from './header';
import Overlay from './Overlay';
import GlobalNavigation from './sidebar';

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
        <GlobalNavigation />
        <Overlay />
        <main className='mx-10 lg:mx-40'>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
