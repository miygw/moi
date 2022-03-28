import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// 空文字列以外を入れると、初回ロード時に一瞬表示される場合がある
const DefaultDescription = '';

const Description = () => {
  const [descriptionState, setDescriptionState] = useState(DefaultDescription);
  const router = useRouter();
  // TODO: useEffectの第２引数をdocument.titleとすると、document is undefinedエラーが出る。
  useEffect(() => setDescriptionState(document.title), [router.pathname]);

  // TODO: text-ellipsis が効かない。レイアウト維持のための苦肉の策として、overflow-hidden 適用中
  return (
    <div className='mx-2 lg:mx-4 my-auto min-w-0 overflow-hidden'>
      <div className='text-ellipsis whitespace-nowrap'>{descriptionState}</div>
    </div>
  );
};

export default Description;
