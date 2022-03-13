import { Octokit } from '@octokit/rest';
import { typeResolve } from '../ts/type';

/**
 * GitHub API から受信したデータを表す型
 */
export type GitHubResponseData = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: string;
  content: string | null;
  encoding: string | null;
  _links: {
    self: string;
    git: string;
    html: string;
  };
};

// TODO: アクセストークンはビルド環境（ローカル/vercel）のものを呼び出すようにする
const octoKit = new Octokit({
  // ローカル環境では GITHUB_TOKEN の値は .env で定義している。
  auth: process.env.GITHUB_TOKEN,
});

/**
 * GitHub API を利用して指定されたリポジトリの情報を取得する。
 */
export const getRepoData = async (
  owner: string,
  repo: string,
  dirPath: string
) => {
  console.debug(`dirPath:${dirPath}`);
  const response = await octoKit.rest.repos.getContent({
    owner,
    repo,
    path: dirPath,
  });

  console.debug('Done GitHub API communication.');

  return typeResolve<GitHubResponseData[]>(response.data);
};
