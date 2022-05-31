import { PropsWithChildren } from 'react';
import { useDisplaySize } from '~/hooks';
import Footer from './Footer';
import Header from './Header';
import { Overlay } from './Overlay';
import Sidebar from './Sidebar';

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  useDisplaySize();
  return (
    <div className='text-gray-500 dark:text-gray-400'>
      <Overlay />
      <Header />
      <div className='flex justify-center'>
        <Sidebar />
        <main className='mx-3 mt-4 lg:max-w-xl xl:max-w-3xl'>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
