import { switchTheme } from '../../lib/colorTheme';

const ColorThemeSwitch = () => {
  // TODO: 以下をやりたい
  // ・トグルスイッチなど、ボタン以外のよりわかりやすいビジュアルの表現
  // ・現在のカラーテーマを取得し、何から何に切り替わるのかわかるようにする説明を入れる。
  return (
    <button
      onClick={switchTheme}
      className='dark:text-white bg-blue-500 hover:bg-blue-700 text-white py-2 px-4'
    >
      Theme Change
    </button>
  );
};

export default ColorThemeSwitch;
