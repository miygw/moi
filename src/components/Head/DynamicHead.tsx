import { NextSeo, NextSeoProps } from 'next-seo';
import { useEffect } from 'react';
import { useUIActions, useUIStates } from '../../hooks';

export const DynamicHead = ({ ...props }: NextSeoProps) => {
  const { pageTitle } = useUIStates();
  const { setPageTitle } = useUIActions();

  useEffect(() => {
    if (props.title && props.title !== pageTitle) {
      setPageTitle(props.title);
    }
  });

  return <NextSeo {...props} />;
};
