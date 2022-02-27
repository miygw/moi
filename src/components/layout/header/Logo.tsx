import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <Image src={'/miygw.jpg'} alt='logo' width={50} height={50} />
      </a>
    </Link>
  );
};

export default Logo;
