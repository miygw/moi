/**
 * （非破壊）与えられた配列をシャッフルした配列を生成する。
 */
export const shuffle = <T>(target: T[]) => {
  // target を破壊しないよう、シャッフル対象は target のディーブコピーとする。
  const result = target.slice();

  // Durstenfeld shuffle：
  // 計算量の少ないシャッフルアルゴリズム。配列のインデックスに関して降順に以下の手続きを繰り返し行う。
  // 現在のインデックスを i とする。
  // 1. 0 ~ i からランダムな整数 k を1つ選ぶ。
  // 2. 配列内の i 番目の要素と k 番目の要素を入れ替える。
  for (var index = result.length - 1; index > 0; index--) {
    var randomIndex = Math.floor(Math.random() * index);

    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }

  return result;
};
