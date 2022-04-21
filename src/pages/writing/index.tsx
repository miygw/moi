import { isBefore } from 'date-fns';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import { PageTitleContext } from '../../components/Providers/PageTItleProvider';
import { Summary } from '../../components/Writing';
import {
  getWritingInfos,
  MetaData as MetaData,
} from '../../lib/writing/getWriting';

type Props = {
  metaDataArray: MetaData[];
};

export default function WritingIndex({ metaDataArray }: Props) {
  const pageTitle = 'writing';
  const pageTitleCtx = useContext(PageTitleContext);
  pageTitleCtx.setTitle(pageTitle);

  const metaDataArraySorted = sortMetaDataArrayByDateDesc(metaDataArray);
  return (
    <>
      <NextSeo title={pageTitle} />
      {metaDataArraySorted.map((metaData) => (
        <Summary key={metaData.title} metaData={metaData} />
      ))}
    </>
  );
}

/**
 * 結果の一覧を日付降順にソートする。
 */
const sortMetaDataArrayByDateDesc = (metaDataArray: MetaData[]) => {
  return metaDataArray.sort((metaData1, metaData2) => {
    const result = isBefore(
      Date.parse(metaData1.date),
      Date.parse(metaData2.date)
    );
    if (result) return 1;
    else return -1;
  });
};

/**
 * すべての記事のメタデータを Props にして返却する。
 */
export const getStaticProps: GetStaticProps<Props> = async () => {
  const writingInfos = await getWritingInfos();
  const metaDataArray = writingInfos.map(({ metaData }) => metaData);
  const result: GetStaticPropsResult<Props> = {
    props: { metaDataArray },
  };

  return result;
};
