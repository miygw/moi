import { InferGetStaticPropsType } from 'next';
import { isBefore } from 'date-fns';
import { DynamicHead } from '~/components/Head';
import { Summary } from '~/components/Writing';
import { fetchAllInfos } from '~/lib/writing/getWriting';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function WritingIndexPage(props: Props) {
  return (
    <>
      <DynamicHead title='writing' />
      {props.metadataList.map((metaData) => (
        <Summary key={metaData.title} metaData={metaData} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const infos = await fetchAllInfos();
  const raw = infos.map(({ metaData }) => metaData);
  // 日付降順にソート
  const sorted = raw.sort((metaData1, metaData2) =>
    isBefore(Date.parse(metaData1.date), Date.parse(metaData2.date)) ? 1 : -1
  );

  return { props: { metadataList: sorted } };
}
