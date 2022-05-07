import { WritingInfo } from '../../lib/writing/getWriting';

const View = ({ contentHtml }: WritingInfo) => {
  return (
    <article className='prose mx-auto prose-img:mx-auto dark:prose-invert md:prose-lg'>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export default View;
