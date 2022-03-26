import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const DefaultDescription = '?????';

const Description = () => {
  const [descriptionState, setDescriptionState] = useState(DefaultDescription);
  const router = useRouter();
  // TODO: useEffectの第２引数をdocument.titleとすると、document is undefinedエラーが出る。
  useEffect(() => setDescriptionState(document.title), [router.pathname]);

  return <div className='mx-4 my-auto'>{descriptionState}</div>;
};

export default Description;
