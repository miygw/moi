import { Octokit } from '@octokit/rest';

// TODO: アクセストークンはビルド環境（ローカル/vercel）のものを呼び出すようにする
const octoKit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

/**
 * GitHub から 指定されたリポジトリのディレクトリのファイル情報の一覧を取得する。
 */
export const fetchRepoData = async (
  owner: string,
  repo: string,
  dirPath: string
) => {
  const response = await octoKit.rest.repos.getContent({
    owner,
    repo,
    path: dirPath,
  });

  return response.data;
};
