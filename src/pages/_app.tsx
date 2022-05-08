import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { defaultSeoProps } from '../configs/seoConfigs';
import Layout from '../components/Layout';
import Providers from '../components/Providers';
import Head from '../components/Head';
import { useGAWithRouter } from '../hooks';

const App = ({ Component, pageProps }: AppProps) => {
  useGAWithRouter();
  return (
    <>
      <Head />
      <Providers>
        <Layout>
          <DefaultSeo {...defaultSeoProps} />
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
};

export default App;
