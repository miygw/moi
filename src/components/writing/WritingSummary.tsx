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
          <div className='text-3xl dark:text-white'>{metaData.title}</div>
          <div className='text-lg'>{metaData.summary}</div>
          <div>{metaData.date}</div>
        </a>
      </Link>
    </div>
  );
};

export default WritingSummary;
