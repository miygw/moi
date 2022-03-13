import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import ThemeProvider from '../components/provider/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: <Head> の <title> に現在ページのディレクトリを渡したい
  return (
    <div className='text-gray-500 dark:text-gray-400'>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
