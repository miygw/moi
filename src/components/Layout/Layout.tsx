import { ReactNode } from 'react';
import { useDisplaySize } from '~/hooks';
import Header from '../Header';
import Footer from '../Footer';
import { MainWrapper } from './MainWrapper';

export const Layout = ({ children }: { children: ReactNode }) => {
  useDisplaySize();
  return (
    <div className='mx-auto max-w-5xl'>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  );
};
