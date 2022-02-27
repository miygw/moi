import Link from 'next/link';

const Menu = () => {
  return (
    <div className='flex items-center justify-center ml-auto'>
      <Link href={'/writing'}>
        <a className='p-4 text-blue-700'>writing</a>
      </Link>
      <Link href={'/miygw'}>
        <a className='p-4 text-blue-700'>miygw</a>
      </Link>
    </div>
  );
};

export default Menu;
