import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { DynamicHead } from '~/components/Head';
import { ContentView, MetaDataView } from '~/components/Writing';
import { fetchInfo, getAllPaths } from '~/lib/writing/getWriting';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function WritingContentPage(props: Props) {
  // TODO: 上部に戻る、下部に次の記事・前の記事
  return (
    <>
      <DynamicHead
        title={props.metaData.title}
        description={props.metaData.summary}
      />
      <ContentView contentHtml={props.contentHtml} metaData={props.metaData} />
      <MetaDataView metaData={props.metaData} />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllPaths();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const info = await fetchInfo(context.params!['slug'] as string);

  return { props: info };
}
