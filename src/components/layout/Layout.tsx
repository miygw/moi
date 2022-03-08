import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '../../hooks/useTheme';
import { applyIsDark, isMatchTheme } from '../../lib/theme';
import Footer from './Footer';
import Header from './header/Header';

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
    <div className='block mx-auto max-w-7xl justify-center' onLoad={applyTheme}>
      <Header />
      <main className='dark:text-white'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
