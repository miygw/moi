import { NextSeo } from 'next-seo';
import ThemeChangeButton from '../components/parts/ThemeChangeButton';

const Index = () => {
  return (
    <>
      <NextSeo title='Home' description='Main page.' />
      <p className='text-center text-8xl p-14 text-black dark:text-white'>
        Here is main block
      </p>
      <div className='text-center'>
        <ThemeChangeButton />
      </div>
    </>
  );
};

export default Index;
