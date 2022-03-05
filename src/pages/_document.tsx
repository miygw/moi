import { Head, Html, Main, NextScript } from 'next/document';
import { initializeTheme } from '../lib/theme';

// body 要素全体の背景色をコントロールしたいため定義している。
const Document = () => {
  return (
    <Html>
      <Head />
        {/* これが目的 */}
        <body className='bg-white dark:bg-black'>
          <Main />
          <NextScript />
        </body>
    </Html>
  );
};

export default Document;
