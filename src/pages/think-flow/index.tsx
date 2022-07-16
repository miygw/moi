import { PrismaClient, think_flow } from '@prisma/client';
import { InferGetStaticPropsType } from 'next';
import { DynamicHead } from '~/components/Head';
import ThinkFlow from '~/components/ThinkFlow';
import { shuffle } from '~/lib/extensions/arrayExtension';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function ThinkFlowPage(props: Props) {
  return (
    <>
      <DynamicHead title='Think Flow' />
      <ThinkFlow thinkFlows={props.shuffledThunkFlows} />
    </>
  );
}

export const getStaticProps = async () => {
  const pc = new PrismaClient();
  const raw = await pc.think_flow.findMany();
  const parsed = JSON.parse(JSON.stringify(raw));
  const shuffledThunkFlows = shuffle<think_flow>(parsed);

  return { props: { shuffledThunkFlows } };
};
