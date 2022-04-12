import { useContext } from 'react';
import { layout } from '../../configs/layout';
import { GlobalNavigationContext } from '../provider/GlobalNavigationProvider';

export default function Overlay() {
  const context = useContext(GlobalNavigationContext);

  const isShow = context.isOpen
    ? 'pointer-events-auto opacity-100'
    : 'pointer-events-none opacity-0';

  return (
    <div
      className={`${isShow} ${layout.zIndex.overlay} bg-black bg-opacity-30 fixed inset-0`}
      onClick={() => context.setIsOpen(false)}
    />
  );
}
