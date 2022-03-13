import Link from 'next/link';
import { MetaData } from '../../lib/writing/getWriting';

type Props = {
  metaData: MetaData;
};

const WritingSummary = ({ metaData }: Props) => {
  return (
    <div className='mb-10'>
      <Link href={`/writing/${metaData.dirName}`}>
        <a>
          <div>{metaData.date}</div>          
          <div className='text-3xl text-black dark:text-white'>{metaData.title}</div>
          <div className='text-lg'>{metaData.summary}</div>
        </a>
      </Link>
    </div>
  );
};

export default WritingSummary;
