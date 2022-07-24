type Props = { markdown: string };

export const ContentView = (props: Props) => {
  return (
    <article className='prose mx-auto prose-img:mx-auto dark:prose-invert md:prose-lg'>
      <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
    </article>
  );
};
