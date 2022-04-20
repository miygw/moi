import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from 'next';
import { NextSeo } from 'next-seo';
import { MetaData, View } from '../../components/Writing';
import { typeResolve } from '../../lib/ts/type';
import {
  getAllPaths,
  getWritingInfo,
  WritingInfo,
} from '../../lib/writing/getWriting';
import { SlugParams } from '../../types/pages';

export default function Writing({ contentHtml, metaData }: WritingInfo) {
  // TODO: 上部に戻る、下部に次の記事・前の記事
  return (
    <>
      <NextSeo title={metaData.title} description={metaData.summary} />
      <View contentHtml={contentHtml} metaData={metaData} />
      <MetaData metaData={metaData} />
    </>
  );
}

export const getStaticProps: GetStaticProps<WritingInfo, SlugParams> = async (
  context
) => {
  const slugParams = typeResolve<SlugParams>(context.params);
  const writingInfo = await getWritingInfo(slugParams.slug);
  const result: GetStaticPropsResult<WritingInfo> = {
    props: writingInfo,
  };

  return result;
};

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
