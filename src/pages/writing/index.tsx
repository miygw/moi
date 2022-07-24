import { InferGetStaticPropsType } from 'next';
import { isBefore } from 'date-fns';
import { DynamicHead } from '~/components/Head';

import { getIndexInfo } from '~/lib/server/markdown';
import { Summary } from '~/components/Markdown';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function WritingIndexPage(props: Props) {
  console.log(props);
  return (
    <>
      <DynamicHead title='writing' />
      {props.allWritingData.map((data) => (
        <Summary key={data.slug} slug={data.slug} metaData={data.metaData} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const raw = await getIndexInfo();
  // 日付降順にソート
  const sorted = raw.sort((raw1, raw2) =>
    isBefore(Date.parse(raw1.metaData.date), Date.parse(raw2.metaData.date))
      ? 1
      : -1
  );

  return { props: { allWritingData: sorted } };
}
