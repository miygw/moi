import { PropsWithChildren, useContext } from 'react';
import { themeContext } from '../../hooks/useTheme';
import { applyIsDark, initializeTheme, isMatchTheme } from '../../lib/theme';
import Footer from './Footer';
import Header from './header/Header';

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const context = useContext(themeContext);
  const applyTheme = () => {
    const isDarkOnContext = context.isDark;
    if (isMatchTheme(isDarkOnContext)) return;
    context.setIsDark(isDarkOnContext);
    applyIsDark(isDarkOnContext);
  }

  return (
    <div className='block mx-auto max-w-7xl justify-center' onLoad={applyTheme}>    
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
