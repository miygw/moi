import { PropsWithChildren, useContext } from 'react';
import { applyIsDark, isMatchTheme } from '../../lib/theme';
import { ThemeContext } from '../provider/ThemeProvider';
import Footer from './Footer';
import Header from './header/Header';
import Overlay from './Overlay';
import GlobalNavigation from './sidebar/GlobalNavigation';

/**
 * サイト全体の基本レイアウトを生成するコンポーネント
 */
const Layout = ({ children }: PropsWithChildren<{}>) => {
  const themeContext = useContext(ThemeContext);
  const applyTheme = () => {
    const isDark = themeContext.isDark;
    if (isMatchTheme(isDark)) return;
    themeContext.setIsDark(isDark);
    applyIsDark(isDark);
  };

  return (
    <div className='mx-auto' onLoad={applyTheme}>
      <Header />
      <div className='flex justify-center'>
        <GlobalNavigation />
        <Overlay/>
        <main className='mx-10 lg:mx-40'>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
