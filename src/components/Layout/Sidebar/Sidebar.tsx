import { useEffect } from 'react';
import Image from 'next/image';
import { HomeIcon, PencilIcon, LightBulbIcon } from '@heroicons/react/solid';
import { Item } from './Item';
import ThemeChangeButton from '~/components/Parts';
import { useUIStates, useUIActions } from '~/hooks';
import { layoutConfigs } from '~/constants/layoutConfigs';
import { linkConfigs } from '~/constants/linkConfigs';

export const SidebarPaddingLeft = 'pl-6';

export const Sidebar = () => {
  const { displaySidebar } = useUIStates();
  useSidebarController();
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
          >
            <HomeIcon className='h-5 w-5' />
          </Item>
        </li>
        <li>
          <Item
            href={linkConfigs.moi.writing.href}
            text={linkConfigs.moi.writing.text}
          >
            <PencilIcon className='h-5 w-5' />
          </Item>
        </li>
        <li>
          <Item
            href={linkConfigs.moi.thinkFlow.href}
            text={linkConfigs.moi.thinkFlow.text}
          >
            <LightBulbIcon className='h-5 w-5' />
          </Item>
        </li>
        <li>
          <Item
            href={linkConfigs.moi.miygw.href}
            text={linkConfigs.moi.miygw.text}
          >
            <Image src='/miygw.ico' height='20' width='20' alt='miygw' />
          </Item>
        </li>
      </ul>
      <div className={`${SidebarPaddingLeft} pl-6 pt-8`}>
        <ThemeChangeButton />
      </div>
    </div>
  );
};

/**
 * サイドバー表示状態の自動制御を行う。
 */
const useSidebarController = () => {
  const { isMobileSize } = useUIStates();
  const { setDisplaySidebar } = useUIActions();

  useEffect(() => {
    if (isMobileSize) return;
    setDisplaySidebar(false);
  }, [isMobileSize, setDisplaySidebar]);
};
