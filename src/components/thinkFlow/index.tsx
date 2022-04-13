import { think_flow } from '@prisma/client';
import Think from './Think';

type Props = {
  thinkFlows: think_flow[];
};

export default function ThinkFlow({ thinkFlows }: Props) {
  return (
    <>
      {thinkFlows.map((thinkFlow) => (
        <Think key={thinkFlow.id} think={thinkFlow} />
      ))}
    </>
  );
}
