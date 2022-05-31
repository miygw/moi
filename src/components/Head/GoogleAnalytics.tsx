import Script from 'next/script';
import { typeResolve } from '~/lib/ts/type';

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${typeResolve<string>(
          process.env.NEXT_PUBLIC_GA_ID
        )}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${typeResolve<string>(
              process.env.NEXT_PUBLIC_GA_ID
            )}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
