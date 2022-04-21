import { createContext, PropsWithChildren, useCallback, useState } from 'react';

type PageTitleContext = {
  title: string;
  setTitle: (value: string) => void;
};

export const PageTitleContext = createContext<PageTitleContext>({
  title: '',
  setTitle: () => {},
});

export default function PageTitleProvider({ children }: PropsWithChildren<{}>) {
  const [titleState, setTitleState] = useState('');
  const setTitle = useCallback((value: string) => {
    setTitleState(value);
  }, []);
  const ctx: PageTitleContext = { title: titleState, setTitle };

  return (
    <PageTitleContext.Provider value={ctx}>
      {children}
    </PageTitleContext.Provider>
  );
}
