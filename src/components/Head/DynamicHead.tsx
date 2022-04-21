import { NextSeo, NextSeoProps } from 'next-seo';
import { useContext } from 'react';
import { PageTitleContext } from '../Providers/PageTItleProvider';

export default function DynamicHead({ ...props }: NextSeoProps) {
  const pageTitleCtx = useContext(PageTitleContext);
  pageTitleCtx.setTitle(props.title ? props.title : '');

  return <NextSeo {...props} />;
}
