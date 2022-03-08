import { createContext, useCallback, useState } from 'react';
import { getIsDark } from '../lib/theme';

/**
 * カラーテーマを表すコンテクストの型
 */
type ThemeContext = {
  /**
   * このコンテクストが保持する現在のカラーテーマの状態。
   * true => ダークテーマである、false => ライトテーマである
   */
  isDark: boolean;
  /**
   * isDark の値をセットする関数
   */
  setIsDark: (isDark: boolean) => void;
};

/**
 * サイト初期化時に取得したデフォルトのカラーテーマ
 */
const defaultIsDark = getIsDark();

/**
 * カラーテーマに関するコンテクスト
 */
export const ThemeContext = createContext<ThemeContext>({
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
