import Link from 'next/link';
import { MetaData } from '../../lib/writing/getWriting';

type Props = {
  metaData: MetaData;
};

export const Summary = ({ metaData }: Props) => {
  return (
    <div className='mb-10 hover:underline'>
      <Link href={`/writing/${metaData.dirName}`}>
        <a>
          <div className='dark:text-gray-400'>{metaData.date}</div>
          <div className='text-black dark:text-white'>{metaData.title}</div>
          <div className='no-underline dark:text-gray-400'>
            {metaData.summary}
          </div>
        </a>
      </Link>
    </div>
  );
};
