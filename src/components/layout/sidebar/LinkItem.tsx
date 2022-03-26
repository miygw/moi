import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GlobalNavigationPaddingLeft } from "./GlobalNavigation";

// TODO: お前は別ファイル行き
type ItemProps = {
  href: string;
  text: string;
};

const LinkItem = ({ href, text }: ItemProps) => {
  const [isSelectedState, setIsSelectedState] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const isSelected = isChildrenOrMatchPathName(href, router.pathname);
    return setIsSelectedState(isSelected);
  }, [href, router.pathname]);

  const dynamicDesign = isSelectedState ? `bg-gray-200 dark:bg-zinc-800` : ``;

  return (
    <div
      className={`${GlobalNavigationPaddingLeft} ${dynamicDesign} h-8 hover:bg-sky-200 dark:hover:bg-sky-900`}
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

export default LinkItem;