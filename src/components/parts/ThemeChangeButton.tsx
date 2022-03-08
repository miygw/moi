import { useContext } from 'react';
import { ThemeContext } from '../../hooks/useTheme';
import { applyIsDark } from '../../lib/theme';

const ThemeChangeButton = () => {
  const context = useContext(ThemeContext);
  const themeChange = () => {
    let nextTheme = !context.isDark;
    applyIsDark(nextTheme);
    context.setIsDark(nextTheme);
  };

  // TODO: 以下をやりたい
  // ・トグルスイッチなど、ボタン以外のよりわかりやすいビジュアルの表現
  // ・現在のカラーテーマを取得し、何から何に切り替わるのかわかるようにする説明を入れる。
  return (
    <button
      onClick={themeChange}
      className='dark:text-white bg-blue-500 hover:bg-blue-700 text-white py-2 px-4'
    >
      {`Change Theme`}
    </button>
  );
};

export default ThemeChangeButton;
