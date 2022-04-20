import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PageTitle() {
  const router = useRouter();
  const [title, setTitle] = useState('');

  useEffect(() => setTitle(router.pathname), [router]);

  // TODO: text-ellipsis が効かない。レイアウト維持のための苦肉の策として、overflow-hidden 適用中
  return (
    <div className='mx-2 lg:mx-4 my-auto min-w-0 overflow-hidden'>
      <div className='text-ellipsis whitespace-nowrap'>{title}</div>
    </div>
  );
}
