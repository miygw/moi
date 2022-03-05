/**
 * カラーテーマを表す列挙型
 */
export enum ColorTheme {
  dark = 'dark',
  light = 'light',
}

/**
 * ローカルストレージ・ユーザー環境からダークテーマ指定があるかを取得する。
 * @returns true => ダークテーマ指定あり、false => ダークテーマ指定なし
 */
export const getIsDark = () => {
  if (
    typeof localStorage === 'undefined' ||
    typeof localStorage.theme === 'undefined'
  ) {
    console.log('ローカルストレージにカラーテーマ指定がないため、ユーザー環境のカラーテーマ指定を適用する。')
    return getIsDarkFromUserPref()
  }

  if (getIsDarkFromLocalStorage()) {
    console.log(
      'ローカルストレージでダークテーマが指定されていることを検知した。'
    );
    return true;
  }

  console.log('ダークテーマ指定がなかった。')
  return false;
};

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
export const getIsDarkFromUserPref = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * 指定されたカラーモードと、現在のカラーモードが一致しているかを判断する。
 */
export const isMatchTheme = (isDark: boolean) => {
  const actualIsDark = document.documentElement.classList.contains(
    ColorTheme.dark
  );
  return isDark === actualIsDark;
};

/**
 * カラーテーマを設定する。
 */
export const applyIsDark = (isDark: boolean) => {
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
  if (getIsDarkFromUserPref()) {
    applyIsDark(true);
    return;
  }

  applyIsDark(getIsDarkFromLocalStorage());
};
