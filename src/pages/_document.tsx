import { Head, Html, Main, NextScript } from 'next/document';
import ThemeProvider from '../components/ThemeProvider';

// body 要素全体の背景色をコントロールしたいため定義している。
const Document = () => {
  return (
    <Html>
      <Head />
      <ThemeProvider>
        {/* これが目的 */}
        <body className='bg-white dark:bg-black'>
          <Main />
          <NextScript />
        </body>
      </ThemeProvider>
    </Html>
  );
};

export default Document;
