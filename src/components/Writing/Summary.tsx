import Link from 'next/link';
import { MetaData } from '../../lib/writing/getWriting';

type Props = {
  metaData: MetaData;
};

const Summary = ({ metaData }: Props) => {
  return (
    <div className='mb-10 hover:underline'>
      <Link href={`/writing/${metaData.dirName}`}>
        <a>
          <div>{metaData.date}</div>
          <div className='text-3xl text-black dark:text-white'>
            {metaData.title}
          </div>
          <div className='text-lg no-underline'>{metaData.summary}</div>
        </a>
      </Link>
    </div>
  );
};

export default Summary;
