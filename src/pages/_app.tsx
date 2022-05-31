import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import { DefaultHead } from '~/components/Head';
import Layout from '~/components/Layout';
import Providers from '~/components/Providers';
import { defaultSeoProps } from '~/configs/seoConfigs';
import { useGoogleAnalytics } from '~/hooks';

const App = ({ Component, pageProps }: AppProps) => {
  useGoogleAnalytics();
  return (
    <>
      <DefaultHead />
      <RecoilRoot>
        <Providers>
          <Layout>
            <DefaultSeo {...defaultSeoProps} />
            <Component {...pageProps} />
          </Layout>
        </Providers>
      </RecoilRoot>
    </>
  );
};

export default App;
