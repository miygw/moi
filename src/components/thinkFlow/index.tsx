import { think_flow } from '@prisma/client';
import Think from './Think';

type Props = {
  thinkFlows: think_flow[];
};

export default function ThinkFlow({ thinkFlows }: Props) {
  // とりあえず、id逆順で表示しておく。
  const sorted = thinkFlows.reverse();

  return (
    <>
      <p className='text-center py-5 text-xl'>miygw thinks...</p>
      {sorted.map((thinkFlow) => (
        <Think key={thinkFlow.id} think={thinkFlow} />
      ))}
    </>
  );
}
