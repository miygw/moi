import { think_flow } from '@prisma/client';
import Link from 'next/link';
import { typeResolve } from '../../lib/ts/type';

type Props = {
  think: think_flow;
};

export const Item = ({ think }: Props) => {
  if (!think.url) {
    return <p className='py-4 text-center'>{think.text}</p>;
  }

  return (
    <p className='py-4 text-center text-black hover:underline dark:text-white'>
      <Link href={typeResolve<string>(think.url)}>
        <a>{think.text}</a>
      </Link>
    </p>
  );
};
