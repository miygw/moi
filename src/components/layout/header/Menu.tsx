import Link from 'next/link';

const Menu = () => {
  return (
    <div className='flex items-center justify-center ml-auto'>
      <Link href={'/writing'}>
        <a className={'p-3 font-bold text-blue-600 dark:text-white'}>writing</a>
      </Link>
      <Link href={'/miygw'}>
        <a className='p-3 font-bold text-blue-600 dark:text-white'>miygw</a>
      </Link>
    </div>
  );
};

export default Menu;
