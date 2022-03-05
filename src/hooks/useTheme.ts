import { createContext, useCallback, useState } from 'react';
import { getIsDark } from '../lib/theme';

type ThemeContext = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

const defaultIsDark = getIsDark();

export const themeContext = createContext<ThemeContext>({
  isDark: defaultIsDark,
  setIsDark: () => {},
});

/**
 * サイト全体のカラーテーマを管理するカスタムフック
 */
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
