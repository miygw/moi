import Image from 'next/image';

const logoSize = '20px';

const Footer = () => {
  // TODO: fix: ライトモードのときロゴが見えない
  return (
    <footer className='text-center text-gray-400 my-12'>
      <a className='m-4' href='https://github.com/miygw'>
        <Image
          src='/GitHub-Mark-Light-32px.png'
          alt='Octcat.png'
          width={logoSize}
          height={logoSize}
        />
      </a>
      <a className='m-4' href='https://twitter.com/6emcSYackedM6ar'>
        <Image
          src='/Twitter social icons - circle - white.png'
          alt='Twitter social icons - circle - white.png'
          width={logoSize}
          height={logoSize}
        />
      </a>
    </footer>
  );
};

export default Footer;
