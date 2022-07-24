import Link from 'next/link';
import { MetaDataBase } from '~/lib/server/markdown';

type Props = {
  slug: string;
  metaData: MetaDataBase;
};

export const Summary = (props: Props) => {
  return (
    <div className='mb-10 hover:underline'>
      <Link href={`/writing/${props.slug}`}>
        <a>
          <div className='dark:text-gray-400'>{props.metaData.date}</div>
          <div className='text-black dark:text-white'>
            {props.metaData.title}
          </div>
          <div className='no-underline dark:text-gray-400'>
            {props.metaData.summary}
          </div>
        </a>
      </Link>
    </div>
  );
};
