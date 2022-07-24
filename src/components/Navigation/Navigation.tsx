import { appConstants } from '~/constants/app';
import { NavigationItem } from './NavigationItem';

export const Navigation = () => {
  return (
    <div className='flex items-center justify-center'>
      <NavigationItem text='ホーム' href={appConstants.href.root} />
      <NavigationItem text='文章' href={appConstants.href.writing} />
      <NavigationItem text='宮川' href={appConstants.href.miygw} />
    </div>
  );
};
