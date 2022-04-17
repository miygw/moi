import { useContext } from 'react';
import { layoutConfigs } from '../../configs/layoutConfigs';
import { SidebarStateContext } from '../Providers/SidebarStateProvider';

export default function Overlay() {
  const ctx = useContext(SidebarStateContext);

  const isShow = ctx.isOpen
    ? 'pointer-events-auto opacity-100'
    : 'pointer-events-none opacity-0';

  return (
    <div
      className={`${isShow} ${layoutConfigs.zIndex.overlay} bg-black bg-opacity-30 fixed inset-0`}
      onClick={() => ctx.setIsOpen(false)}
    />
  );
}
