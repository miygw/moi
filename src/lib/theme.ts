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
    console.debug('Detect: localStorage.theme is unset.');
    return false;
  }

  if (localStorage.theme === ColorTheme.dark) {
    console.debug(`Detect: localStorage.theme is ${ColorTheme.dark}.`);
    return true;
  }

  // localStorage.theme に値が設定されているが、'dark' でない場合は light テーマとする。
  console.debug(`Detect: localStorage.theme is NOT ${ColorTheme.dark}.`);
  return false;
};

/**
 * ユーザー環境のカラーテーマを取得する。
 * @returns true => ダークテーマ、false => ライトテーマ
 */
export const getIsDarkFromUserEnv = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.debug('Detect: User\'s prefer color scheme is dark')
    return true;
  }

  console.debug('Detect: User\'s prefer color scheme is NOT dark')
  return false;
};

/**
 * カラーテーマを設定する。
 */
export const setIsDark = (isDark: boolean) => {
  console.log('called lib.setIsDark' + `isDark: ${isDark}`)
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
  console.log('called lib.initializeTheme')
  if (getIsDarkFromUserEnv()) {
    setIsDark(true);
    return;
  }

  setIsDark(getIsDarkFromLocalStorage());
};
