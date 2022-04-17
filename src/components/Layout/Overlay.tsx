import { useContext } from 'react';
import { layout } from '../../configs/layout';
import { SidebarStateContext } from '../Providers/SidebarStateProvider';

export default function Overlay() {
  const ctx = useContext(SidebarStateContext);

  const isShow = ctx.isOpen
    ? 'pointer-events-auto opacity-100'
    : 'pointer-events-none opacity-0';

  return (
    <div
      className={`${isShow} ${layout.zIndex.overlay} bg-black bg-opacity-30 fixed inset-0`}
      onClick={() => ctx.setIsOpen(false)}
    />
  );
}
