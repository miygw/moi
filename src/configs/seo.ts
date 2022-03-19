import { DefaultSeoProps } from "next-seo";

export const defaultSeoProps: DefaultSeoProps = {
  title: 'miygw',
  defaultTitle: 'miygw',
  description: 'moi; miygw on internet',
  canonical: 'https://miygw.vercel.app',
  additionalLinkTags: [{
    rel: 'icon',
    href: '/miygw.ico'
  }],
  openGraph: {
    url: 'https://miygw.vercel.app',
    type: 'website',
    title: 'miygw',
    description: 'moi; miygw on internet',
    images: [
      {
        url: 'https://raw.githubusercontent.com/miygw/moi/main/public/miygw.jpg',
        alt: 'miygw',
        type: 'image/jpg',
      },
    ],    
    locale: 'ja_JP',
    site_name: 'miygw',
  },
  twitter: {
    handle: '@6emcSYackedM6ar',
    site: '@6emcSYackedM6ar',
    cardType: 'summary_large_image',
  },
};