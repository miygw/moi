import { ReactNode } from 'react';
import { useDisplaySize } from '~/hooks';
import Header from '../Header';
import Footer from '../Footer';
import { MainWrapper } from './MainWrapper';

/**
 * アプリケーションの共通レイアウト。
 */
export const Layout = ({ children }: { children: ReactNode }) => {
  useDisplaySize();
  return (
    <div className='mx-auto max-w-5xl'>
      <Header />
      <div className='m-2 border border-zinc-800' />
      <MainWrapper>{children}</MainWrapper>
      <div className='m-2 border border-zinc-800' />
      <Footer />
    </div>
  );
};
