import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { defaultSeoProps } from '../configs/seoConfigs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import Layout from '../components/Layout';
import Providers from '../components/Providers';
import Head from '../components/Head';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
}
