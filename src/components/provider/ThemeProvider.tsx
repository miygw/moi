import { PropsWithChildren } from 'react';
import { useThemeContext, ThemeContext } from '../../hooks/useTheme';

/**
 * カラーテーマ（Dark/Light）コンテクストを子コンポーネントへ配信するコンポーネント
 */
const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const context = useThemeContext();

  // 子コンポーネントによるコンテクストの更新を可能にするため、.Providerを利用する。
  // これを行わない場合、子コンポーネントはコンテクストの参照しかできない。
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
