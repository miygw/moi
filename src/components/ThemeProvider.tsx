import { PropsWithChildren } from 'react';
import { useTheme, themeContext } from '../hooks/useTheme';

/**
 * カラーテーマ（Dark/Light）コンテクストを子コンポーネントへ配信するコンポーネント
 */
const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const context = useTheme();
  return (
    // 子コンポーネントによるコンテクストの更新を可能にするため、.Providerを利用する。
    // これを行わない場合、子コンポーネントはコンテクストの参照しかできない。
    <themeContext.Provider value={context}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
