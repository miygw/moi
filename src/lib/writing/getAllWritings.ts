import matter, { GrayMatterFile } from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { fetchRepoData } from '../github/api';
import { typeResolve } from '../ts/type';

type GitHubResponseData = {
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

export type WritingInfo = {
  metaData: Metadata;
  contentHtml: string;
};

type Metadata = {
  title: string;
  date: string;
  summary: string;
};

// TODO: 以下、疲れているときに書いたのでリファクター必須。リテラルの多さがやばい。

/**
 * writing のすべての記事情報を取得する。
 */
export const getAllWritings = async () => {
  const rawDirDataAll = await fetchRepoData('miygw', 'writing', 'writing');
  const dirDataAll = typeResolve<GitHubResponseData[]>(rawDirDataAll);
  // writing直下のファイルは除外し、ディレクトリ情報だけにする。
  const writingDirDataAll = dirDataAll.filter((data) => data.type === 'dir');

  const writingDataAll = await Promise.all(
    writingDirDataAll.map((dirData) => getWriting(dirData.path))
  );

  const grayMatterFiles = await Promise.all(
    writingDataAll.map((writingData) => {
      const content = typeResolve<string>(writingData.content);
      // TODO: 以下の encoding を Buffer.from の encoding として使いたいが、BufferEncoding が export されていないのでできない。
      // const encoding = typeResolve<string>(writingData.encoding);
      const buffer = Buffer.from(content, 'base64');
      return matter(buffer);
    })
  );

  const results = await Promise.all(
    grayMatterFiles.map((file) => createResult(file))
  );

  return results;
};

const getWriting = async (writingDirPath: string) => {
  const filePath = path.posix.join(writingDirPath, 'writing.md');
  const rawFileData = await fetchRepoData('miygw', 'writing', filePath);
  const fileData = typeResolve<GitHubResponseData>(rawFileData);

  return fileData;
};

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

const createResult = async (file: GrayMatterFile<Buffer>) => {
  // TODO: markdownは必ずしもhtmlに変換する必要はない。無駄な処理となる場合がある。
  const contentHtml = await markdownToHtml(file.content);
  const result: WritingInfo = {
    contentHtml: contentHtml,
    metaData: {
      title: file.data.title,
      date: file.data.date,
      summary: file.data.summary,
    },
  };

  return result;
};
