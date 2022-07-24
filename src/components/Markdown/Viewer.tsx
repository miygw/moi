import ReactMarkdown from 'react-markdown';

type Props = {
  /** 生のマークダウン文字列 */
  markdown: string;
};

export const Viewer = (props: Props) => {
  <ReactMarkdown>{props.markdown}</ReactMarkdown>;
};
