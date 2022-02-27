import { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './header/Header';

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className='block mx-auto max-w-7xl justify-center'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
