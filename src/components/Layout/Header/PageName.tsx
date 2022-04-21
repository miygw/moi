import { useContext, useEffect, useState } from 'react';
import { PageTitleContext } from '../../Providers/PageTItleProvider';

export default function PageTitle() {
  const ctx = useContext(PageTitleContext);
  const [title, setTitle] = useState('');

  useEffect(() => setTitle(ctx.title), [ctx]);

  // TODO: text-ellipsis が効かない。レイアウト維持のための苦肉の策として、overflow-hidden 適用中
  return (
    <div className='mx-2 my-auto min-w-0 overflow-hidden lg:mx-4'>
      <div className='text-ellipsis whitespace-nowrap'>{title}</div>
    </div>
  );
}
