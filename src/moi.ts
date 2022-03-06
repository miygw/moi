/**
 * moi 全体の設定を表す型
 */
export type Moi = {
  site: SiteInfo;
  pages: PageInfo[];
};

/**
 * サイト全体の設定を表す型
 */
export type SiteInfo = {
  title: string;
  favicon: string;
};

/**
 * ページの設定を表す型
 */
export type PageInfo = {
  page: MoiPages;
  title: string;
  path: string;
  summary: string;
};

/**
 * moi のページ名を表す列挙型
 */
export enum MoiPages {
  index = 'index',
  writing = 'writing',
  miygw = 'miygw',
}

/**
 * moi の設定を定義するオブジェクト
 */
export const moi: Moi = {
  site: {
    title: 'miygw',
    favicon: '/miygw.ico',
  },
  pages: [
    { page: MoiPages.index, title: '', path: '', summary: 'miygw' },
    {
      page: MoiPages.writing,
      title: MoiPages.writing,
      path: MoiPages.writing,
      summary: "miygw's writing",
    },
    {
      page: MoiPages.miygw,
      title: MoiPages.miygw,
      path: MoiPages.miygw,
      summary: 'all about miygw',
    },
  ],
};
