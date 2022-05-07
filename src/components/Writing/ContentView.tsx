import { WritingInfo } from '../../lib/writing/getWriting';

export const ContentView = ({ contentHtml }: WritingInfo) => {
  return (
    <article className='prose mx-auto prose-img:mx-auto dark:prose-invert md:prose-lg'>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};
