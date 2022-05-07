import { PrismaClient, think_flow } from '@prisma/client';
import { GetStaticProps } from 'next';
import { shuffle } from '../lib/extensions/arrayExtension';
import ThinkFlow from '../components/ThinkFlow';
import { DynamicHead } from '../components/Head';

type Props = {
  thinkFlows: think_flow[];
};

export default function Home({ thinkFlows }: Props) {
  return (
    <>
      <DynamicHead title='Home' description='Main page.' />
      <ThinkFlow thinkFlows={thinkFlows} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prisma = new PrismaClient();
  let thinkFlows = await prisma.think_flow.findMany();
  thinkFlows = JSON.parse(JSON.stringify(thinkFlows));
  thinkFlows = shuffle<think_flow>(thinkFlows);
  return { props: { thinkFlows } };
};
