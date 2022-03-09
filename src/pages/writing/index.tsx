import { isBefore } from 'date-fns';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import Meta from '../../components/Meta';
import WritingSummary from '../../components/writing/WritingSummary';
import {
  getWritingInfos,
  MetaData as MetaData,
} from '../../lib/writing/getWriting';
import { MoiPages } from '../../moi';

type Props = {
  metaDataArray: MetaData[];
};

const WritingIndex = ({ metaDataArray }: Props) => {
  const metaDataArraySorted = sortMetaDataArrayByDateDesc(metaDataArray);
  return (
    <>
      <Meta moiPage={MoiPages.writing} />
      <div className='dark:text-white'>
        {' '}
        {metaDataArraySorted.map((metaData) => (
          <WritingSummary key={metaData.title} metaData={metaData} />
        ))}
      </div>
    </>
  );
};

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

export default WritingIndex;
