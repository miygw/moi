import { think_flow } from '@prisma/client';
import Item from './Item';

type Props = {
  thinkFlows: think_flow[];
};

export default function ThinkFlow({ thinkFlows }: Props) {
  return (
    <>
      {thinkFlows.map((thinkFlow) => (
        <Item key={thinkFlow.id} think={thinkFlow} />
      ))}
    </>
  );
}
