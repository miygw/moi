import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import Meta from '../components/Meta';
import { initializeTheme } from '../../lib/colorTheme';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: <Head> の <title> に現在ページのディレクトリを渡したい
  return (
    <div onLoad={initializeTheme}>
      {/* TODO: pageTitleは動的に取得するようにする。 */}
      <Meta pageTitle='' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
