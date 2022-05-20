import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { defaultSeoProps } from '../configs/seoConfigs';
import Layout from '../components/Layout';
import Providers from '../components/Providers';
import { DefaultHead } from '../components/Head';
import { useGoogleAnalytics } from '../hooks';

const App = ({ Component, pageProps }: AppProps) => {
  useGoogleAnalytics();
  return (
    <>
      <DefaultHead />
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
