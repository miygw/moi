import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import matter from 'gray-matter';
import { githubConfigs } from '~/constants/githubConfigs';
import { GitHubResponseData, getRepoData } from '../github/api';
import { typeResolve } from '../ts/type';

export type WritingInfo = {
  metaData: MetaData;
  contentHtml: string;
};

export type MetaData = {
  dirName: string;
  title: string;
  date: string;
  summary: string;
};

type RawWritingInfo = {
  dirName: string;
  fileData: GitHubResponseData;
};

export const fetchInfo = async (slug: string) => {
  // TODO: posixの必要性があるか調査
  const filePath = path.posix.join(
    githubConfigs.api.dirPath,
    slug,
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
  const rawWritingInfo: RawWritingInfo = { dirName: slug, fileData };
  return createResult(rawWritingInfo);
};

export const fetchAllInfos = async () => {
  const allDirectoryData = await fetchAll();
  const rawWritingInfos = await Promise.all(
    allDirectoryData.map((dirData) => fetchAllRawInfos(dirData))
  );

  const results = await Promise.all(
    rawWritingInfos.map((rawWritingInfo) => createResult(rawWritingInfo))
  );

  return results;
};

export const getAllPaths = async () => {
  const writingDirDataAll = await fetchAll();
  return writingDirDataAll.map((dirData) => dirData.name);
};

const createResult = async ({ dirName, fileData }: RawWritingInfo) => {
  const content = typeResolve<string>(fileData.content);
  const buffer = Buffer.from(content, 'base64');
  const grayMatterBuffer = matter(buffer);
  const contentHtml = await markdownToHtml(grayMatterBuffer.content);

  return {
    contentHtml,
    metaData: {
      dirName,
      title: grayMatterBuffer.data.title,
      date: grayMatterBuffer.data.date,
      summary: grayMatterBuffer.data.summary,
    },
  } as WritingInfo;
};

const markdownToHtml = async (markdown: string) => {
  const raw = await remark().use(gfm).use(html).process(markdown);
  return raw.toString();
};

const fetchAll = async () => {
  const dirDataAll = await getRepoData(
    githubConfigs.api.ownerName,
    githubConfigs.api.repoName,
    githubConfigs.api.dirPath
  );
  // writing直下のファイルは除外し、ディレクトリ情報だけにする。
  return dirDataAll.filter((data) => data.type === 'dir');
};

const fetchAllRawInfos = async (dirData: GitHubResponseData) => {
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

  return { dirName: dirData.name, fileData } as RawWritingInfo;
};
