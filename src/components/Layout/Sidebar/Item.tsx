import { PropsWithChildren, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUIActions } from '~/hooks';
import { SidebarPaddingLeft } from './Sidebar';

/**
 * 「actualPath が parentPath と一致、または parentPath のサブページである」が成り立つかを判断する。
 */
const isChildrenOrMatchPathName = (parentPath: string, actualPath: string) => {
  // ルートパスは任意のパスと前方一致するので、ルートパスであるかは完全一致で評価する。
  if (parentPath === '/') {
    if (parentPath === actualPath) return true;
    else return false;
  }

  return actualPath.indexOf(parentPath) === 0;
};

type Props = {
  href: string;
  text: string;
};

export const Item = ({ href, text, children }: PropsWithChildren<Props>) => {
  // このLinkItemが現在URLに対応するなら表示を強調する。
  const [isSelectedState, setIsSelectedState] = useState(false);
  const onSelectedColor = isSelectedState ? `bg-gray-200 dark:bg-zinc-800` : ``;

  // 現在パスの親パスがLinkItemのhrefと一致すれば強調する。
  const router = useRouter();
  useEffect(() => {
    const isSelected = isChildrenOrMatchPathName(href, router.pathname);
    return setIsSelectedState(isSelected);
  }, [href, router.pathname]);

  // LinkItemクリック => サイドバーを閉じる処理
  const { setDisplaySidebar } = useUIActions();

  return (
    <div
      className={`${SidebarPaddingLeft} ${onSelectedColor} h-8 hover:bg-sky-200 dark:hover:bg-sky-900`}
    >
      <Link href={href}>
        <a
          className='flex h-full w-full items-center space-x-2'
          onClick={() => setDisplaySidebar(false)}
        >
          {/* Imageコンポーネント対応のため改めてスタイルを設定 */}
          <span className='flex items-center'>{children}</span>
          <span>{text}</span>
        </a>
      </Link>
    </div>
  );
};
