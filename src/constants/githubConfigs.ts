import path from 'path';

export const githubConfigs = {
  api: {
    ownerName: 'miygw',
    fileName: 'writing.md',
    repoName: 'moi-assets',
    // TODO: なぜposixでないとGitHubからフェッチできないのか解決する。
    dirPath: path.posix.join('assets', 'writing'),
  },
};
