import { layoutConfigs } from '../../../configs/layoutConfigs';
import { linkConfigs } from '../../../configs/linkConfigs';
import { useUI } from '../../../hooks';
import { ThemeChangeButton } from '../../Parts/ThemeChangeButton';
import { HomeIcon, PencilIcon, LightBulbIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Item } from './Item';
import { useEffect } from 'react';

export const SidebarPaddingLeft = 'pl-6';

export const Sidebar = () => {
  const { displaySidebar } = useUI();
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

const useSidebarController = () => {
  const { isMobileSize, closeSidebar } = useUI();

  useEffect(() => {
    if (!isMobileSize) return;
    closeSidebar();
  }, [isMobileSize]);
};

// // デスクトップサイズからモバイルサイズに変わった場合、
// // デスクトップサイズでは固定表示のサイドバーを閉じる。
// useEffect(() => {
//   if (!isLg) closeSidebar();
// }, [isLg]);
