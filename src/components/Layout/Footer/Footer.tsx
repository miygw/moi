import Image from 'next/image';
import path from 'path';
import { useContext } from 'react';
import { linkConfigs } from '../../../configs/linkConfigs';
import { ThemeContext } from '../../Providers/ThemeProvider';

const logoSize = '20px';

export default function Footer() {
  const ctx = useContext(ThemeContext);
  const themeDir = ctx.isDark ? 'dark' : 'light';

  return (
    <footer className='text-center text-gray-400 my-12'>
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
