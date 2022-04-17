import { createContext, PropsWithChildren, useCallback, useState } from 'react';

type SidebarStateContext = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const SidebarStateContext = createContext<SidebarStateContext>({
  // モバイルファーストの為、false
  isOpen: false,
  setIsOpen: () => {},
});

export default function SidebarStateProvider({
  children,
}: PropsWithChildren<{}>) {
  const [isOpenState, setIsOpenState] = useState(false);
  const setIsOpen = useCallback(
    (isOpen: boolean) => setIsOpenState(isOpen),
    []
  );

  const ctx: SidebarStateContext = {
    isOpen: isOpenState,
    setIsOpen,
  };

  return (
    <SidebarStateContext.Provider value={ctx}>
      {children}
    </SidebarStateContext.Provider>
  );
}
