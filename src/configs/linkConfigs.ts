type LinkConfigs = {
  moi: LinkInfo[];
  social: LinkInfo[];
};

type LinkInfo = {
  href: string;
  text?: string;
};

export const linkConfigs: LinkConfigs = {
  moi: [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/writing',
      text: 'writing',
    },
    {
      href: '/miygw',
      text: 'miygw',
    },
  ],
  social: [
    {
      href: 'https://github.com/miygw',
      text: 'GitHub',
    },
    {
      href: 'https://twitter.com/6emcSYackedM6ar',
      text: 'Twitter',
    },
  ],
};
