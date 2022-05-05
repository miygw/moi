import { NextSeo, NextSeoProps } from 'next-seo';
import { useUI } from '../../hooks/useUI';

export default function DynamicHead({ ...props }: NextSeoProps) {
  const { setPageTitle, pageTitle } = useUI();
  if (props.title && props.title === pageTitle) {
    setPageTitle(props.title);
  }

  return <NextSeo {...props} />;
}
