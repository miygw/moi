import Link from 'next/link';
import { think_flow } from '@prisma/client';

type Props = { think: think_flow };

export const Item = (props: Props) => {
  return props.think.url ? (
    <p className='py-4 text-center text-black hover:underline dark:text-white'>
      <Link href={props.think.url}>
        <a>{props.think.text}</a>
      </Link>
    </p>
  ) : (
    <p className='py-4 text-center'>{props.think.text}</p>
  );
};
