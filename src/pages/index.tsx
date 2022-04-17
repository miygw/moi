import { NextSeo } from 'next-seo';
import { PrismaClient, think_flow } from '@prisma/client';
import { GetStaticProps } from 'next';
import ThinkFlow from '../components/ThinkFlow';
import { shuffle } from '../lib/extensions/arrayExtension';

type Props = {
  thinkFlows: think_flow[];
};

export default function Home({ thinkFlows }: Props) {
  return (
    <>
      <NextSeo title='Home' description='Main page.' />
      <div className='py-5'>
        <ThinkFlow thinkFlows={thinkFlows} />
      </div>
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
