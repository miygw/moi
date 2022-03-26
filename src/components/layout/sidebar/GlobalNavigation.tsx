import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ThemeChangeButton from '../../parts/ThemeChangeButton';

// TODO: お前はconfigs行き
const ItemInfos = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/writing',
    text: 'writing',
  },
  {
    href: '/miygw',
    text: 'miygw',
  },
];

const DefaultPaddingLeft = 'pl-6';

const GlobalNavigation = () => {
  return (
    // TODO: 横幅は画面サイズに応じて変えないといけないぞ
    <div
      className={`pt-4 fixed left-0 min-h-full w-60 text-black dark:text-white`}
    >
      <ul>
        {ItemInfos.map((info) => (
          <li key={info.text}>
            <Item href={info.href} text={info.text} />
          </li>
        ))}
      </ul>
      <div className={`${DefaultPaddingLeft} pl-6 pt-8`}>
        <ThemeChangeButton />
      </div>
    </div>
  );
};

// TODO: お前は別ファイル行き
type ItemProps = {
  href: string;
  text: string;
};

const Item = ({ href, text }: ItemProps) => {
  const [isSelectedState, setIsSelectedState] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const isSelected = isChildrenOrMatchPathName(href, router.pathname);
    return setIsSelectedState(isSelected);
  }, [href, router.pathname]);

  const dynamicDesign = isSelectedState ? `bg-gray-200 dark:bg-zinc-800` : ``;

  return (
    <div
      className={`${DefaultPaddingLeft} ${dynamicDesign} h-8 hover:bg-sky-200 dark:hover:bg-sky-900`}
    >
      <Link href={href}>
        <a className='h-full'>
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

export default GlobalNavigation;
