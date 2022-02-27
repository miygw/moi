// TODO: 疲れているときに書いたのでリファクタリング必須
// Hooks で実現したい。

/**
 * カラーテーマを表す列挙型
 */
export enum ColorTheme {
  unknown = 'unknown',
  dark = 'dark',
  light = 'light',
}

/**
 * 現在のテーマを取得する。
 */
export const getTheme = () => {
  // TODO: OnLoad発火後でないとlocalStorage.themeはセットされていない。
  // if (localStorage.theme === ColorTheme.dark) {
  //   return ColorTheme.dark;
  // } else {
  //   return ColorTheme.light;
  // }
};

/**
 * ローカルストレージとユーザー環境からテーマ指定を取得し、サイト全体に反映する。
 */
export const initializeTheme = () => {
  // ローカルストレージにテーマ指定情報があれば、それを採用する。
  if (tryApplyLocalStorageTheme(localStorage)) return;

  // なければ、ユーザー環境のテーマの適用する。
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add(ColorTheme.dark);
    localStorage.theme = ColorTheme.dark;
  } else {
    document.documentElement.classList.add(ColorTheme.light);
    localStorage.theme = ColorTheme.light;
  }
};

/**
 * ローカルストレージのテーマ指定がある場合は、それをサイト全体に反映する。
 * @param localStorage ローカルストレージインスタンス
 * @returns true => ローカルストレージのテーマを反映した。false => ローカルストレージにテーマ指定が無かった。
 */
const tryApplyLocalStorageTheme = (localStorage: Storage) => {
  switch (localStorage.theme) {
    case ColorTheme.dark:
      document.documentElement.classList.add(ColorTheme.dark);
      return true;
    case ColorTheme.light:
      document.documentElement.classList.add(ColorTheme.light);
      return true;
    default:
      return false;
  }
};

/**
 * テーマ指定（dark/light）を切り替える。
 */
export const switchTheme = () => {
  if (localStorage.theme === ColorTheme.dark) {
    document.documentElement.classList.remove(ColorTheme.dark);
    document.documentElement.classList.add(ColorTheme.light);
    localStorage.theme = ColorTheme.light;
  } else {
    document.documentElement.classList.remove(ColorTheme.light);
    document.documentElement.classList.add(ColorTheme.dark);
    localStorage.theme = ColorTheme.dark;
  }
};
