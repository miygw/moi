import { createContext, useCallback, useState } from 'react';
import { getIsDarkFromLocalStorage, getIsDarkFromUserEnv } from '../lib/theme';

// set context type
type ThemeContext = {
  dark: boolean;
  setIsDark: (isDark: boolean) => void;
};

// context default value
const defaultContext: ThemeContext = {
  dark: false,
  setIsDark: () => {},
};

// context object
export const themeContext = createContext<ThemeContext>(defaultContext);

/**
 * サイト全体のカラーテーマを管理するカスタムフック
 */
export const useTheme = (): ThemeContext => {
  // state名はThemeContext typeのプロパティに合わせる。
  const [dark, setDark] = useState(false);
  // 関数名はThemeContext typeのプロパティに合わせる。
  const setIsDark = useCallback((current: boolean): void => {
    setDark(current);
  }, []);
  return {
    dark,
    setIsDark,
  };
};
