import { appConstants } from '~/constants/app';
import Navigation from '../Navigation';
import { Logo } from './Logo';

/**
 * ヘッダー。サイト名とロゴ画像とナビゲーションメニュー。
 */
export const Header = () => {
  return (
    <div className='text-center'>
      <p className='my-2'>{appConstants.name}</p>
      <Logo />
      <Navigation />
    </div>
  );
};
