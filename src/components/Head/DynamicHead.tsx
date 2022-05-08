import { NextSeo, NextSeoProps } from 'next-seo';
import { useEffect } from 'react';
import { useUI } from '../../hooks';

export const DynamicHead = ({ ...props }: NextSeoProps) => {
  const { setPageTitle, pageTitle } = useUI();
  useEffect(() => {
    if (props.title && props.title !== pageTitle) {
      setPageTitle(props.title);
    }
  });

  return <NextSeo {...props} />;
};
