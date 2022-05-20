import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { typeResolve } from '../lib/ts/type';

const useGoogleAnalytics = () => {
  const router = useRouter();
  useEffect(() => {
    const gaHandler = (url: string) => {
      const params: Gtag.ConfigParams = { page_path: url };
      window.gtag(
        'config',
        typeResolve<string>(process.env.NEXT_PUBLIC_GA_ID),
        params
      );
    };
    router.events.on('routeChangeComplete', gaHandler);
    return () => {
      router.events.off('routeChangeComplete', gaHandler);
    };
  }, [router.events]);
};

export default useGoogleAnalytics;
