import { MetaDataBase } from '~/lib/server/markdown';

type Props = { metaData: MetaDataBase };

export const MetaDataView = (props: Props) => {
  const elements = [
    `title: ${props.metaData.title}`,
    `date: ${props.metaData.date}`,
    `summary: ${props.metaData.summary}`,
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
