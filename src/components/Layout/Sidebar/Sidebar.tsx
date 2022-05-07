import { layoutConfigs } from '../../../configs/layoutConfigs';
import { linkConfigs } from '../../../configs/linkConfigs';
import { useUI } from '../../../hooks';
import ThemeChangeButton from '../../Parts/ThemeChangeButton';
import Item from './Item';

export const SidebarPaddingLeft = 'pl-6';

export default function Sidebar() {
  const { displaySidebar } = useUI();
  const visibility = displaySidebar ? `visible` : `invisible`;

  return (
    <div
      className={`${visibility} ${layoutConfigs.zIndex.globalNavigation} fixed left-0 min-h-full w-3/4 bg-white pt-4 text-black dark:bg-black dark:text-white sm:w-1/2 md:w-1/3 lg:visible lg:w-40 xl:visible xl:w-60`}
    >
      <ul>
        <li>
          <Item
            href={linkConfigs.moi.Home.href}
            text={linkConfigs.moi.Home.text}
          />
        </li>
        <li>
          <Item
            href={linkConfigs.moi.writing.href}
            text={linkConfigs.moi.writing.text}
          />
        </li>
        <li>
          <Item
            href={linkConfigs.moi.miygw.href}
            text={linkConfigs.moi.miygw.text}
          />
        </li>
      </ul>
      <div className={`${SidebarPaddingLeft} pl-6 pt-8`}>
        <ThemeChangeButton />
      </div>
    </div>
  );
}
