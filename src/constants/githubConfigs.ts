import path from 'path';

export const githubConfigs = {
  rest: {
    ownerName: 'miygw',
    fileName: 'writing.md',
    repoName: 'moi-assets',
    // TODO: なぜposixでないとGitHubからフェッチできないのか解決する。
    dirPath: path.posix.join('assets', 'writing'),
  },
  graphql: {
    endpoint: 'https://api.github.com/graphql',
  },
};
