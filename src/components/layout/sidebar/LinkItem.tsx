import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { GlobalNavigationContext } from '../../provider/GlobalNavigationProvider';
import { GlobalNavigationPaddingLeft } from './GlobalNavigation';

// TODO: お前は別ファイル行き
type ItemProps = {
  href: string;
  text: string;
};

const LinkItem = ({ href, text }: ItemProps) => {
  // このメニュー項目が現在URLに対応するなら、メニュー項目の表示を強調する。そのための準備。
  const [isSelectedState, setIsSelectedState] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // 現在パスの親パスがメニュー項目URLと一致すれば、強調する。
    const isSelected = isChildrenOrMatchPathName(href, router.pathname);
    return setIsSelectedState(isSelected);
  }, [href, router.pathname]);

  // メニュー項目クリックでメニューを閉じる関数の定義
  const ctx = useContext(GlobalNavigationContext);
  const closeGlobalNavigation = () => ctx.setIsOpen(false);

  const dynamicDesign = isSelectedState ? `bg-gray-200 dark:bg-zinc-800` : ``;

  return (
    <div
      className={`${GlobalNavigationPaddingLeft} ${dynamicDesign} h-8 hover:bg-sky-200 dark:hover:bg-sky-900`}
    >
      <Link href={href}>
        <a className='h-full' onClick={closeGlobalNavigation}>
          <div className='w-full h-full'>{text}</div>
        </a>
      </Link>
    </div>
  );
};

/**
 * 「actualPath が parentPath と一致、または parentPath のサブページである」が成り立つかを判断する。
 */
const isChildrenOrMatchPathName = (parentPath: string, actualPath: string) => {
  // ルートパスは任意のパスと前方一致するので、ルートパス専用の評価を行う。
  if (parentPath === '/') {
    if (parentPath === actualPath) return true;
    else return false;
  }

  return actualPath.indexOf(parentPath) === 0;
};

export default LinkItem;
