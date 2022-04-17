import { useContext } from 'react';
import { layoutConfigs } from '../../../configs/layoutConfigs';
import { linkConfigs } from '../../../configs/linkConfigs';
import ThemeChangeButton from '../../Parts/ThemeChangeButton';
import { SidebarStateContext } from '../../Providers/SidebarStateProvider';
import Item from './Item';

export const GlobalNavigationPaddingLeft = 'pl-6';

export default function GlobalNavigation() {
  const ctx = useContext(SidebarStateContext);
  const visibility = ctx.isOpen ? `visible` : `invisible`;

  return (
    <div
      className={`${visibility} ${layoutConfigs.zIndex.globalNavigation} bg-white dark:bg-black pt-4 fixed left-0 min-h-full w-3/4 sm:w-1/2 md:w-1/3 lg:visible lg:w-40 xl:visible xl:w-60 text-black dark:text-white`}
    >
      <ul>
        {linkConfigs.map((info) => (
          <li key={info.text}>
            <Item href={info.href} text={info.text} />
          </li>
        ))}
      </ul>
      <div className={`${GlobalNavigationPaddingLeft} pl-6 pt-8`}>
        <ThemeChangeButton />
      </div>
    </div>
  );
}
