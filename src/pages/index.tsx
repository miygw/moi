import Meta from '../components/Meta';
import ThemeChangeButton from '../components/parts/ThemeChangeButton';
import { MoiPages } from '../moi';

const Index = () => {
  return (
    <>
      <Meta moiPage={MoiPages.index} />
      <p className='text-center text-8xl p-14 dark:text-white'>Here is main block</p>
      <div className='text-center'>
        <ThemeChangeButton />
      </div>
    </>
  );
};

export default Index;
