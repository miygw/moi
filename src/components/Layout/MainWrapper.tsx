import { ReactNode } from 'react';

export const MainWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='m-2'>
      <main>{children}</main>
    </div>
  );
};
