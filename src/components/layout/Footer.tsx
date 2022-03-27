import Image from 'next/image';
import path from 'path';
import { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeProvider';

const logoSize = '20px';

const Footer = () => {
  const context = useContext(ThemeContext);
  const themeDir = context.isDark ? 'dark' : 'light';
  return (
    <footer className='text-center text-gray-400 my-12'>
      <a className='m-4' href='https://github.com/miygw'>
        <Image
          src={path.posix.join('/', themeDir, 'github.svg')}
          alt='github'
          width={logoSize}
          height={logoSize}
        />
      </a>
      <a className='m-4' href='https://twitter.com/6emcSYackedM6ar'>
        <Image
          src={path.posix.join('/', themeDir, 'Twitter.svg')}
          alt='twitter'
          width={logoSize}
          height={logoSize}
        />
      </a>
    </footer>
  );
};

export default Footer;
