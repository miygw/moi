import { WritingInfo } from '../../lib/writing/getWriting';

const View = ({ contentHtml, metaData }: WritingInfo) => {
  return (
    <>
      <article className='mx-auto prose md:prose-lg prose-img:mx-auto dark:prose-invert'>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </>
  );
};

export default View;
