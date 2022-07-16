import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';
import { FixedHead } from '~/components/Head';
import Layout from '~/components/Layout';
import Providers from '~/components/Providers';

import { useGoogleAnalytics } from '~/hooks';
import { defaultSeoProps } from '~/constants/seoConfigs';

export default function App({ Component, pageProps }: AppProps) {
  useGoogleAnalytics();
  return (
    <>
      <FixedHead />
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
}
