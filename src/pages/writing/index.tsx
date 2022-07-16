import { InferGetStaticPropsType } from 'next';
import { isBefore } from 'date-fns';
import { DynamicHead } from '~/components/Head';
import { Summary } from '~/components/Writing';
import { getWritingInfos } from '~/lib/writing/getWriting';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function WritingIndexPage(props: Props) {
  return (
    <>
      <DynamicHead title='writing' />
      {props.sortedMetadataList.map((metaData) => (
        <Summary key={metaData.title} metaData={metaData} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const infos = await getWritingInfos();
  const raw = infos.map(({ metaData }) => metaData);
  const sortedMetadataList = raw.sort((metaData1, metaData2) =>
    isBefore(Date.parse(metaData1.date), Date.parse(metaData2.date)) ? 1 : -1
  );

  return { props: { sortedMetadataList } };
};
