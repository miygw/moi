import Link from 'next/link';
import Image from 'next/image';
import { appConstants } from '~/constants/app';

/**
 * クリックでルートページに移動するロゴ画像。
 */
export const Logo = () => {
  return (
    <Link href={appConstants.href.root}>
      <Image
        className='cursor-pointer'
        src='/miygw.jpg'
        alt='logo'
        width={70}
        height={70}
      />
    </Link>
  );
};
