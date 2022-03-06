import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from 'next';
import { typeResolve } from '../../lib/ts/type';
import { getAllPaths, getWritingInfo, WritingInfo } from '../../lib/writing/getWriting';
import { SlugParams } from '../../types/pages';

const Writing = ({ contentHtml, metaData }: WritingInfo) => {
  return (
    <div>
      <div>
        <h1>{metaData.title}</h1>
        <div className='md' dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
};

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

export default Writing;
