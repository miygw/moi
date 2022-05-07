import { useTheme } from 'next-themes';
import Image from 'next/image';
import path from 'path';
import { useCallback } from 'react';
import { linkConfigs } from '../../../configs/linkConfigs';

const logoSize = '20px';

export default function Footer() {
  const { theme, systemTheme } = useTheme();

  const getThemeDir = useCallback(() => {
    if (!theme && !systemTheme) return 'light';
    if (!theme) return systemTheme!;
    return theme === 'dark' ? 'dark' : 'light';
  }, [systemTheme, theme]);

  return (
    <footer className='my-12 text-center text-gray-400'>
      <a
        className='m-4'
        href={
          linkConfigs.social.filter((info) => info.text === 'GitHub')![0].href
        }
      >
        <Image
          className='relative'
          src={path.posix.join('/', getThemeDir(), 'github.svg')}
          alt='github'
          width={logoSize}
          height={logoSize}
        />
      </a>
      <a
        className='m-4'
        href={
          linkConfigs.social.filter((info) => info.text === 'Twitter')![0].href
        }
      >
        <Image
          src={path.posix.join('/', getThemeDir(), 'Twitter.svg')}
          alt='twitter'
          width={logoSize}
          height={logoSize}
        />
      </a>
    </footer>
  );
}
