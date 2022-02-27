import Link from 'next/link';

const Menu = () => {
  return (
    <div>
      <Link href={'/writing'}>
        <a>writing</a>
      </Link>
      <Link href={'/miygw'}>
        <a>miygw</a>
      </Link>
    </div>
  );
};

export default Menu;
