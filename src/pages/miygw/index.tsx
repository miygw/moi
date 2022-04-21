import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useContext } from 'react';
import { PageTitleContext } from '../../components/Providers/PageTItleProvider';

export default function Miygw() {
  const pageTitle = 'miygw';
  const pageTitleCtx = useContext(PageTitleContext);
  pageTitleCtx.setTitle(pageTitle);

  return (
    <>
      <NextSeo title={pageTitle} />
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
