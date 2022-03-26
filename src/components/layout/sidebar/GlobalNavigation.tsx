import Link from 'next/link';

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

const GlobalNavigation = () => {
  return (
    // TODO: 横幅は画面サイズに応じて変えないといけないぞ
    <div className={`fixed left-0 min-h-full w-60 text-black dark:text-white`}>
      <ul>
        {ItemInfos.map((info) => (
          <li key={info.text}>
            <Item href={info.href} text={info.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// TODO: お前は別ファイル行き
type ItemProps = {
  href: string;
  text: string;
};

const Item = ({ href, text }: ItemProps) => {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
};

export default GlobalNavigation;
