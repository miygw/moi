import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import Meta from '../components/Meta';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: <Head> はここに書くべきか検討する
  // TODO: <Head> の <title> に現在ページのディレクトリを渡したい
  return (
    <>
      {/* TODO: pageTitleは動的に取得するようにする。 */}
      <Meta pageTitle='' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
