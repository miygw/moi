import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = { markdown: string };

export const ContentView = (props: Props) => {
  return (
    // <article className='prose mx-auto prose-img:mx-auto dark:prose-invert md:prose-lg'>
    <article>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {props.markdown}
      </ReactMarkdown>
    </article>
  );
};
