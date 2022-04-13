import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Miygw() {
  return (
    <>
      <NextSeo title='miygw' />
      <div className='my-4 text-center'>
        <Image
          className='static'
          src='/miygw.jpg'
          alt='miygw'
          height='300'
          width='300'
        />
      </div>
    </>
  );
}
