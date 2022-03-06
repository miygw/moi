import Meta from '../components/Meta';
import ThemeChangeButton from '../components/parts/ThemeChangeButton';
import { MoiPages } from '../moi';

const Index = () => {
  return (
    <>
      <Meta moiPage={MoiPages.index} />
      <div className=' dark:text-white text-center'>
        <p className='text-8xl p-14'>Here is main block</p>
        <ThemeChangeButton />
      </div>
    </>
  );
};

export default Index;
