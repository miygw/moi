import { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Overlay } from './Overlay';
import Sidebar from './Sidebar';

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className='mx-auto text-gray-500 dark:text-gray-400'>
      <Header />
      <div className='flex justify-center'>
        <Sidebar />
        <Overlay />
        <main className='mx-3 mt-4 lg:max-w-xl xl:max-w-3xl'>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
