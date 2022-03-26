import { createContext, PropsWithChildren, useCallback, useState } from 'react';

type GlobalNavigationContext = {
  isOpen: boolean;
  setIsOpen: (isOpenSidebar: boolean) => void;
};

export const GlobalNavigationContext = createContext<GlobalNavigationContext>({
  // モバイルファーストの為、false
  isOpen: false,
  setIsOpen: () => {},
});

const GlobalNavigationProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isOpenState, setIsOpenState] = useState(false);
  const setIsOpen = useCallback(
    (isOpen: boolean) => setIsOpenState(isOpen),
    []
  );

  const ctx: GlobalNavigationContext = {
    isOpen: isOpenState,
    setIsOpen,
  };

  return (
    <GlobalNavigationContext.Provider value={ctx}>
      {children}
    </GlobalNavigationContext.Provider>
  );
};

export default GlobalNavigationProvider;
