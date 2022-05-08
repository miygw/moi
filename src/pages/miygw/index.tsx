import Image from 'next/image';
import { DynamicHead } from '../../components/Head';

export default function Miygw() {
  return (
    <>
      <DynamicHead title={'miygw'} />
      <div className='text-center'>
        <Image
          className='static'
          src='/miygw.jpg'
          alt='miygw'
          height='300'
          width='300'
        />
      </div>
    </>
  );
}
