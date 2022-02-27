import { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './header/Header';

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
