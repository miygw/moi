import { useUI } from '../../../hooks';

export const PageTitle = () => {
  const { pageTitle } = useUI();

  // TODO: text-ellipsis が効かない。レイアウト維持のための苦肉の策として、overflow-hidden 適用中
  return (
    <div className='mx-2 my-auto min-w-0 overflow-hidden lg:mx-4'>
      <div className='text-ellipsis whitespace-nowrap'>{pageTitle}</div>
    </div>
  );
};
