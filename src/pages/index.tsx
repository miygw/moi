import { NextSeo } from 'next-seo';
import { PrismaClient, think_flow } from '@prisma/client';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import ThinkFlow from '../components/thinkFlow';

type Props = {
  thinkFlows: think_flow[];
};

export default function Home({ thinkFlows }: Props) {
  return (
    <>
      <NextSeo title='Home' description='Main page.' />
      <p className='text-center text-4xl pb-4'>miygw</p>
      <div className=' text-center'>
        <Image
          className='static'
          src='/miygw.jpg'
          alt='miygw'
          height='300'
          width='300'
        />
      </div>
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
