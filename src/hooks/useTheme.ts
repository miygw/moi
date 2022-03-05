import { createContext, useCallback, useState } from 'react';
import { getIsDark } from '../lib/colorTheme';

// set context type
type ThemeContext = {
  dark: boolean;
  setIsDark: (isDark: boolean) => void;
};

// context default value
const defaultContext: ThemeContext = {
  dark: false,
  // 初期値を作成するが、eslintに引っかかる
  setIsDark: () => {},
};

// context object
export const themeContext = createContext<ThemeContext>(defaultContext);

// custom Hook
export const useDark = (): ThemeContext => {
  // state名はThemeContext typeのプロパティに合わせる。
  const [dark, setDark] = useState(getIsDark());
  // 関数名はThemeContext typeのプロパティに合わせる。
  const setIsDark = useCallback((current: boolean): void => {
    setDark(current);
  }, []);
  return {
    dark,
    setIsDark,
  };
};