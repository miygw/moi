import { useContext } from 'react';
import ThemeChangeButton from '../../parts/ThemeChangeButton';
import { GlobalNavigationContext } from '../../provider/GlobalNavigationProvider';
import LinkItem from './LinkItem';

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

export const GlobalNavigationPaddingLeft = 'pl-6';

const GlobalNavigation = () => {
  const ctx = useContext(GlobalNavigationContext);
  const dynamicVisibility = ctx.isOpen ? `visible` : `invisible`;

  return (
    <div
      className={`bg-white dark:bg-black pt-4 fixed left-0 min-h-full w-3/4 ${dynamicVisibility} sm:w-1/2 md:w-1/3 lg:visible lg:w-40 xl:visible xl:w-60 text-black dark:text-white`}
    >
      <ul>
        {ItemInfos.map((info) => (
          <li key={info.text}>
            <LinkItem href={info.href} text={info.text} />
          </li>
        ))}
      </ul>
      <div className={`${GlobalNavigationPaddingLeft} pl-6 pt-8`}>
        <ThemeChangeButton />
      </div>
    </div>
  );
};

export default GlobalNavigation;
