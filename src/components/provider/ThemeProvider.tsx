import { PropsWithChildren } from 'react';
import { createContext, useCallback, useState } from 'react';
import { getIsDark } from '../../lib/theme';

const defaultIsDark = getIsDark();

type ThemeContext = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

export const ThemeContext = createContext<ThemeContext>({
  isDark: defaultIsDark,
  setIsDark: () => {},
});

export const useThemeContext = (): ThemeContext => {
  const [isDark, setIsDarkState] = useState(defaultIsDark);
  const setIsDark = useCallback((currentIsDark: boolean): void => {
    setIsDarkState(currentIsDark);
  }, []);
  return {
    isDark,
    setIsDark,
  };
};

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const context = useThemeContext();

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}
