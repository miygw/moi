import { think_flow } from '@prisma/client';
import Link from 'next/link';
import { typeResolve } from '../../lib/ts/type';

type Props = {
  think: think_flow;
};

export default function Item({ think }: Props) {
  if (!think.url) {
    return <p className='text-center py-4'>{think.text}</p>;
  }

  return (
    <p className='text-center py-4 text-black dark:text-white hover:underline'>
      <Link href={typeResolve<string>(think.url)}>
        <a>{think.text}</a>
      </Link>
    </p>
  );
}
