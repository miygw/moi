// TODO: 疲れているときに書いたのでリファクタリング必須
// Hooks で実現したい。

// true => ダークモード、false => ライトモード と扱う。

/**
 * カラーテーマを表す列挙型
 */
export enum ColorTheme {
  /**
   * ダークテーマ
   */
  dark = 'dark',
  /**
   * ライトテーマ
   */
  light = 'light',
}

/**
 * ユーザーのローカルストレージのカラーテーマを取得する。
 * @returns true => ダークテーマ、false => ライトテーマまたは取得失敗。
 */
export const getIsDarkFromLocalStorage = () => {
  // localStorage インスタンスまたはそのプロパティが取得できない場合
  if (
    typeof localStorage === 'undefined' ||
    typeof localStorage.theme === 'undefined'
  ) {
    return false;
  }

  if (localStorage.theme === ColorTheme.dark) {
    return true;
  }

  // localStorage.theme に値が設定されているが、'dark' でない場合は light テーマとする。
  return false;
};

/**
 * ユーザー環境のカラーテーマを取得する。
 * @returns true => ダークテーマ、false => ライトテーマ
 */
export const getIsDarkFromUserEnv = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
};

/**
 * カラーテーマを設定する。
 */
export const applyIsDark = (isDark: boolean) => {
  console.log('called lib.setIsDark' + `isDark: ${isDark}`);
  if (isDark) {
    document.documentElement.classList.add(ColorTheme.dark);
    localStorage.theme = ColorTheme.dark;
  } else {
    document.documentElement.classList.remove(ColorTheme.dark);
    localStorage.theme = '';
  }
};

/**
 * カラーテーマを初期化する。
 * ユーザー環境またはローカルストレージのテーマ指定に基づいて初期化するテーマを決定する。
 */
export const initializeTheme = () => {
  if (getIsDarkFromUserEnv()) {
    applyIsDark(true);
    return;
  }

  applyIsDark(getIsDarkFromLocalStorage());
};
