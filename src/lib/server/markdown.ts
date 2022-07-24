import path from 'path';
import matter from 'gray-matter';
import { githubConfigs } from '~/constants/githubConfigs';
import * as octokit from './octokit';

/** メタデータの基本型 */
export type MetaDataBase = {
  title: string;
  date: string;
  summary?: string;
};

/** マークダウンファイルの情報 */
export type Markdown<T extends MetaDataBase> = {
  /** [slug] の slug。 */
  slug: string;
  /** マークダウンから取得したメタデータ。 */
  metaData: T;
  /** 生マークダウン文字列。 */
  markdown: string;
};

/** 指定のslug文字列で解決したファイルパス */
const resolveFilePath = (slug: string) =>
  path.posix.join(githubConfigs.api.dirPath, slug, githubConfigs.api.fileName);
/** ディレクトリパス */
const resolvedDirPath = path.posix.join(githubConfigs.api.dirPath);

/** 指定されたslugのwriting.mdのメタデータを取得する。 */
export const getMetaData = async <T extends MetaDataBase>(slug: string) => {
  const contents = await octokit.getContents(resolveFilePath(slug));
  return matter(contents[0].content!, { excerpt: true }).data as T;
};

/** Index.tsx用に必要なデータを取得する。 */
export const getIndexInfo = async <T extends MetaDataBase>() => {
  const slugs = await getAllSlugs();
  return await Promise.all(
    slugs.map(async (slug) => {
      const content = (await octokit.getContents(resolveFilePath(slug)))[0];
      return {
        slug,
        metaData: matter(content.content!, { excerpt: true }).data as T,
      };
    })
  );
};

/** 指定されたslugのwriting.mdを取得する。 */
export const getContent = async <T extends MetaDataBase>(slug: string) => {
  const resolvedPath = path.posix.join(
    githubConfigs.api.dirPath,
    slug,
    githubConfigs.api.fileName
  );
  const contents = await octokit.getContents(resolvedPath);
  if (contents.length > 1) throw new Error('writing.mdが複数個存在していた。');

  const markdown = contents[0].content!;

  return {
    slug,
    metaData: matter(markdown, { excerpt: true }).data as T,
    markdown,
  } as Markdown<T>;
};

/** すべてのslugを取得する。 */
export const getAllSlugs = async () => {
  const contents = await octokit.getContents(resolvedDirPath);
  return contents.map((content) => content.name);
};
