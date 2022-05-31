import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import matter from 'gray-matter';
import { githubConfigs } from '~/configs/githubConfigs';
import { GitHubResponseData, getRepoData } from '../github/api';
import { typeResolve } from '../ts/type';

/**
 * 記事の情報を表す型。
 */
export type WritingInfo = {
  /**
   * 記事のメタデータ
   */
  metaData: MetaData;
  /**
   * 記事を表すHTML文字列
   */
  contentHtml: string;
};

/**
 * 記事のメタデータを表す型。
 */
export type MetaData = {
  /**
   * 記事が属するディレクトリ名。
   */
  dirName: string;
  /**
   * 記事タイトル。
   */
  title: string;
  /**
   * 記事の日時情報
   */
  date: string;
  /**
   * 記事の要約
   */
  summary: string;
};

/**
 * 記事情報を取得する過程で一時的に利用するデータを表す型
 */
type RawWritingInfo = {
  /**
   * 記事データが属するディレクトリ名
   */
  dirName: string;
  /**
   * 記事データ
   */
  fileData: GitHubResponseData;
};

/**
 * 与えられたディレクトリに属する記事情報を取得する。
 */
export const getWritingInfo = async (postDirName: string) => {
  const filePath = path.posix.join(
    githubConfigs.api.dirPath,
    postDirName,
    githubConfigs.api.fileName
  );
  // TODO: これでうまくいく理由が理解できていない。<T>(T[]) = T となるということか。
  const fileData = typeResolve<GitHubResponseData>(
    await getRepoData(
      githubConfigs.api.ownerName,
      githubConfigs.api.repoName,
      filePath
    )
  );
  const rawWritingInfo: RawWritingInfo = { dirName: postDirName, fileData };
  return createResult(rawWritingInfo);
};

/**
 * すべての記事情報を取得する。
 */
export const getWritingInfos = async () => {
  const allDirectoryData = await getAllDirectoryData();
  const rawWritingInfos = await Promise.all(
    allDirectoryData.map((dirData) => getRawWritingInfos(dirData))
  );

  const results = await Promise.all(
    rawWritingInfos.map((rawWritingInfo) => createResult(rawWritingInfo))
  );

  return results;
};

/**
 * 記事に対応するパスの一覧を取得する。
 */
export const getAllPaths = async () => {
  const writingDirDataAll = await getAllDirectoryData();
  return writingDirDataAll.map((dirData) => dirData.name);
};

/**
 * 記事情報の生データを記事情報に変換する。
 */
const createResult = async ({ dirName, fileData }: RawWritingInfo) => {
  const content = typeResolve<string>(fileData.content);
  const buffer = Buffer.from(content, 'base64');
  const grayMatterBuffer = matter(buffer);
  const contentHtml = await markdownToHtml(grayMatterBuffer.content);

  const result: WritingInfo = {
    contentHtml,
    metaData: {
      dirName,
      title: grayMatterBuffer.data.title,
      date: grayMatterBuffer.data.date,
      summary: grayMatterBuffer.data.summary,
    },
  };
  return result;
};

/**
 * Markdown 文字列を HTML 文字列に変換する。
 */
const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(gfm).use(html).process(markdown);
  return result.toString();
};

/**
 * すべての記事ディレクトリのデータを取得する。
 */
const getAllDirectoryData = async () => {
  const dirDataAll = await getRepoData(
    githubConfigs.api.ownerName,
    githubConfigs.api.repoName,
    githubConfigs.api.dirPath
  );
  // writing直下のファイルは除外し、ディレクトリ情報だけにする。
  return dirDataAll.filter((data) => data.type === 'dir');
};

/**
 * 記事情報の生データを取得する。
 * @param dirData 取得する記事データの属するディレクトリのデータ
 */
const getRawWritingInfos = async (dirData: GitHubResponseData) => {
  const dirPath = dirData.path;
  const filePath = path.posix.join(dirPath, githubConfigs.api.fileName);
  // TODO: これでうまくいく理由が理解できていない。<T>(T[]) = T となるということか。
  const fileData = typeResolve<GitHubResponseData>(
    await getRepoData(
      githubConfigs.api.ownerName,
      githubConfigs.api.repoName,
      filePath
    )
  );
  const result: RawWritingInfo = { dirName: dirData.name, fileData };
  return result;
};
