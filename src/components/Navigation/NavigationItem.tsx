import Link from 'next/link';

type Props = {
  /**
   * 表示名。
   */
  text: string;
  /**
   * リンク先。
   */
  href: string;
};

/**
 * ナビゲーションメニューの項目。
 */
export const NavigationItem = (props: Props) => {
  return (
    <Link href={props.href}>
      <div className='cursor-pointer px-2 hover:underline'>{props.text}</div>
    </Link>
  );
};
