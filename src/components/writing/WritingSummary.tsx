import Link from 'next/link';
import { MetaData } from '../../lib/writing/getWriting';

type Props = {
  metaData: MetaData;
};

const WritingSummary = ({ metaData }: Props) => {
  return (
    <div>
      <Link href={`/writing/${metaData.dirName}`}>
        <a>
          <h2>{metaData.title}</h2>
        </a>
      </Link>
      <div>{metaData.summary}</div>
      <div>{metaData.date}</div>
    </div>
  );
};

export default WritingSummary;