import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import ThemeProvider from '../components/provider/ThemeProvider';
import { DefaultSeo } from 'next-seo';
import { defaultSeoProps } from '../configs/seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import GoogleAnalytics from '../components/GoogleAnalytics';
import GlobalNavigationProvider from '../components/provider/GlobalNavigationProvider';
import Layout from '../components/layout';

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
      <GoogleAnalytics />
      <ThemeProvider>
        <GlobalNavigationProvider>
          <Layout>
            <DefaultSeo {...defaultSeoProps} />
            <Component {...pageProps} />
          </Layout>
        </GlobalNavigationProvider>
      </ThemeProvider>
    </>
  );
}
