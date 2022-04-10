import { think_flow } from '@prisma/client';
import Link from 'next/link';
import { typeResolve } from '../../lib/ts/type';

type Props = {
  think: think_flow;
};

export default function Think({ think }: Props) {
  const url = think.url;
  if (url === '' || url === null) {
    return <p>{think.text}</p>;
  }

  return (
    <p>
      <Link href={typeResolve<string>(think.url)}>
        <a>{think.text}</a>
      </Link>
    </p>
  );
}
