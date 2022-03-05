import { PropsWithChildren } from 'react';
import { useDark, themeContext } from '../hooks/useTheme';

/**
 * カラーテーマ（Dark/Light）コンテクストを子コンポーネントへ配信するコンポーネント
 */
const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const context = useDark();
  return (
    // 子コンポーネントによるコンテクストの更新を可能にするため、.Providerを利用する
    <themeContext.Provider value={context}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
