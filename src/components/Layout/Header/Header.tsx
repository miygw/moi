import { layoutConfigs } from '../../../configs/layoutConfigs';
import { Logo } from './Logo';
import { PageTitle } from './PageTitle';

export const Header = () => {
  return (
    <header
      className={`${layoutConfigs.zIndex.header} sticky top-0 flex text-center`}
    >
      <Logo />
      <PageTitle />
    </header>
  );
};
