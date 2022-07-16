import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next';
import { DynamicHead } from '~/components/Head';
import { ContentView, MetaDataView } from '~/components/Writing';
import { typeResolve } from '~/lib/ts/type';
import {
  WritingInfo,
  getWritingInfo,
  getAllPaths,
} from '~/lib/writing/getWriting';
import { SlugParams } from '~/types/pages';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function WritingContentPage({
  contentHtml,
  metaData,
}: WritingInfo) {
  // TODO: 上部に戻る、下部に次の記事・前の記事
  return (
    <>
      <DynamicHead title={metaData.title} description={metaData.summary} />
      <ContentView contentHtml={contentHtml} metaData={metaData} />
      <MetaDataView metaData={metaData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths<SlugParams> = async () => {
  const paths = await getAllPaths();
  const allParams = paths.map((path) => {
    const params: { params: SlugParams } = {
      params: { slug: path },
    };

    return params;
  });

  const result: GetStaticPathsResult<SlugParams> = {
    paths: allParams,
    fallback: false,
  };

  return result;
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slugParams = typeResolve<SlugParams>(context.params);
  const writingInfo = await getWritingInfo(slugParams.slug);
  const result: GetStaticPropsResult<WritingInfo> = {
    props: writingInfo,
  };

  return result;
};
