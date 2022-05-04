import { useTheme } from 'next-themes';
import Image from 'next/image';
import path from 'path';
import { useContext } from 'react';
import { linkConfigs } from '../../../configs/linkConfigs';

const logoSize = '20px';

export default function Footer() {
  const { theme } = useTheme();
  const themeDir = theme === 'dark' ? 'dark' : 'light';

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
          src={path.posix.join('/', themeDir, 'github.svg')}
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
          src={path.posix.join('/', themeDir, 'Twitter.svg')}
          alt='twitter'
          width={logoSize}
          height={logoSize}
        />
      </a>
    </footer>
  );
}
