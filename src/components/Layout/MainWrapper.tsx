import { ReactNode } from 'react';

export const MainWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mx-2'>
      <main>{children}</main>
    </div>
  );
};
