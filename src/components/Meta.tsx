import Head from 'next/head';
import { typeResolve } from '../lib/ts/type';
import { moi, MoiPages, PageInfo } from '../moi';

type Props = {
  moiPage: MoiPages;
};

/**
 * ページのメタ情報を生成する。\<head\> タグに対応。
 */
const Meta = ({ moiPage }: Props) => {
  const pageInfo = getPageInfo(moiPage);
  const titleDelimiter = pageInfo.title === '' ? '' : ' - ';
  return (
    <Head>
      <title>{`${moi.site.title}${titleDelimiter}${pageInfo.title}`}</title>
      <link rel='icon' href={moi.site.favicon} />
    </Head>
  );
};

/**
 * 指定されたページ名に対応するページ情報を取得する。
 */
const getPageInfo = (moiPage: MoiPages) => {
  const pageInfoOrUndefined = moi.pages.find(
    (pageInfo) => pageInfo.page === moiPage
  );
  return typeResolve<PageInfo>(pageInfoOrUndefined);
};

export default Meta;
