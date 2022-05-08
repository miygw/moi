import { layoutConfigs } from '../../configs/layoutConfigs';
import { useUI } from '../../hooks';

export const Overlay = () => {
  const { displayOverlay, closeSidebar } = useUI();

  return (
    <div
      className={`${
        displayOverlay
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }
      ${layoutConfigs.zIndex.overlay}
      fixed inset-0 bg-black bg-opacity-30`}
      onClick={() => closeSidebar()}
    />
  );
};
