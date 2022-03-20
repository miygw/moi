import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import ThemeProvider from '../components/provider/ThemeProvider';
import { DefaultSeo } from 'next-seo';
import { defaultSeoProps } from '../configs/seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import GoogleAnalytics from '../components/GoogleAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
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
      <GoogleAnalytics/>
      <div className='text-gray-500 dark:text-gray-400'>
        <ThemeProvider>
          <Layout>
            <DefaultSeo {...defaultSeoProps} />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
