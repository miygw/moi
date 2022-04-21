import { MetaData } from '../../lib/writing/getWriting';

type Props = {
  metaData: MetaData;
};

const MetaData = ({ metaData }: Props) => {
  return (
    <div className='border-t border-gray-400  py-4 text-right'>
      <ul className='xl:mr-8'>
        <li className='ml-4'>{`title: ${metaData.title}`}</li>
        <li className='ml-4'>{`date: ${metaData.date}`}</li>
        <li className='ml-4'>{`summary: ${metaData.summary}`}</li>
      </ul>
    </div>
  );
};

export default MetaData;
