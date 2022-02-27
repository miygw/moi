import Head from 'next/head';

type Props = {
  pageTitle: string;
};

/**
 * ページのメタ情報を生成する。\<head\> タグに対応。
 */
const Meta = ({ pageTitle }: Props) => {
  return (
    <Head>
      <title>miygw - {pageTitle}</title>
      <link rel='icon' href='/miygw.ico' />
    </Head>
  );
};

export default Meta;
