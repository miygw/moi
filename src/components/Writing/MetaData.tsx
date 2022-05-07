import { MetaData } from '../../lib/writing/getWriting';

type Props = {
  metaData: MetaData;
};

const MetaData = ({ metaData }: Props) => {
  const elements = [
    `title: ${metaData.title}`,
    `date: ${metaData.date}`,
    `summary: ${metaData.summary}`,
  ];
  return (
    <div className='border-t border-gray-400  py-4 text-right'>
      <ul className='xl:mr-8'>
        {elements.map((element) => (
          <li key={element} className='ml-4'>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetaData;
