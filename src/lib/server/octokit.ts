import { Octokit } from '@octokit/rest';
import { Endpoints } from '@octokit/types';
import { githubConfigs } from '~/constants/githubConfigs';

// APIの呼び出しごとにインスタンスを生成する必要をなくすために、グローバルインスタンスにする。
const octoKit = new Octokit({ auth: process.env.GITHUB_TOKEN });

/** GETリクエストのパラメーターの型 */
type GetRequestParams =
  Endpoints['GET /repos/{owner}/{repo}/contents/{path}']['parameters'];

/** GETリクエストの応答データの型 */
type ContentBase = {
  /** 種別 */
  type: 'dir' | 'file';
  /** ファイルの中身 */
  content?: string;
  /** ディレクトリ名またはファイルのベース名 */
  name: string;
  /** パス */
  path: string;
};

const getParams = (path: string) => {
  return {
    owner: githubConfigs.api.ownerName,
    repo: githubConfigs.api.repoName,
    path,
  } as GetRequestParams;
};

/** GitHubから指定パスのファイルを取得する。*/
export const getContents = async (path: string) => {
  const params = getParams(path);
  const { data } = await octoKit.rest.repos.getContent(params);

  // dataからすべてのcontentを取得し、返却。
  // @octokit/types提供のdataの型は合併型で扱いにくいため、このような処理を行う必要がある。
  /** {@link https://github.com/octokit/types.ts/issues/267} */
  if ('content' in data)
    return [
      {
        ...data,
        content: data.type === 'file' ? Decode(data.content) : 'undefined',
      } as ContentBase,
    ];
  if (Array.isArray(data))
    return data.map(
      (d) =>
        ({
          ...d,
          content: d.type === 'file' ? Decode(d.content!) : 'undefined',
        } as ContentBase)
    );

  throw new Error('正常にデータを取得できなかった。');
};

/** 与えられた文字列をbase64でデコードする。 */
const Decode = (encoded: string, encoding: BufferEncoding = 'base64') => {
  const buffer = Buffer.from(encoded, encoding);
  return buffer.toString();
};
