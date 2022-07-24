import { linkConfigs } from '~/constants/linkConfigs';

export const Footer = () => {
  return (
    <footer className='text-center'>
      <a className='m-4' href={linkConfigs.social.GitHub.href}>
        GitHub
      </a>
      <a className='m-4' href={linkConfigs.social.Twitter.href}>
        Twitter
      </a>
    </footer>
  );
};
