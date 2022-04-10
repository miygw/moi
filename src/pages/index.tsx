import { NextSeo } from 'next-seo';
import { PrismaClient, think_flow } from '@prisma/client';
import { GetStaticProps } from 'next';
import ThinkFlow from '../components/thinkFlow';

type Props = {
  thinkFlows: think_flow[];
};

export default function Home({ thinkFlows }: Props) {
  return (
    <>
      <NextSeo title='Home' description='Main page.' />
      <ThinkFlow thinkFlows={thinkFlows} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prisma = new PrismaClient();
  let thinkFlows = await prisma.think_flow.findMany();
  thinkFlows = JSON.parse(JSON.stringify(thinkFlows));
  return { props: { thinkFlows } };
};
