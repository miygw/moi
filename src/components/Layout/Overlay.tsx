import { layoutConfigs } from '../../configs/layoutConfigs';
import { useUI } from '../../hooks';

export default function Overlay() {
  const { displaySidebar, closeSidebar } = useUI();

  const isShow = displaySidebar
    ? 'pointer-events-auto opacity-100'
    : 'pointer-events-none opacity-0';

  return (
    <div
      className={`${isShow} ${layoutConfigs.zIndex.overlay} fixed inset-0 bg-black bg-opacity-30`}
      onClick={() => closeSidebar()}
    />
  );
}
