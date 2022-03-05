import { useContext } from "react";
import { themeContext } from "../hooks/useTheme";
import { ColorTheme, switchTheme } from "../lib/colorTheme";

const ColorThemeSwitch = () => {
  const context = useContext(themeContext);
  console.log(`ColorThemeSwitch: context.isDark = ${context.dark}`)
  const callBack = () => {
    switchTheme();
    context.setIsDark(!context.dark)
  }

  // TODO: 以下をやりたい
  // ・トグルスイッチなど、ボタン以外のよりわかりやすいビジュアルの表現
  // ・現在のカラーテーマを取得し、何から何に切り替わるのかわかるようにする説明を入れる。
  return (
    <button
      onClick={callBack}
      className='dark:text-white bg-blue-500 hover:bg-blue-700 text-white py-2 px-4'
    >
      {`Theme Change`}
    </button>
  );
};

export default ColorThemeSwitch;
