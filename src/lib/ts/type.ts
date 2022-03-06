/**
 * target を T 型インスタンスとして解決する。失敗した場合は TypeError をスローする。
 */
 export const typeResolve = <T>(target: any): T => {
  typeGuard<T>(target);
  return <T>target;
};

/**
 * 与えられた引数が与えられた型にキャストできない場合、TypeError をスローする。
 */
export const typeGuard = <T>(target: any) => {
  if (typeof target === 'undefined') {
    console.trace();
    throw new TypeError('target が undefined 型だった。');
  }
  // TODO: 引数の型が T と厳密に一致しているかを確認できていない。JavaScript の型の仕組みについて調査が必要
};