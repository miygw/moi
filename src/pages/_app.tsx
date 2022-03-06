import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import ThemeProvider from '../components/provider/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: <Head> の <title> に現在ページのディレクトリを渡したい
  return (
    <div>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
