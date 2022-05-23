import { useCallback, useEffect } from 'react';
import { layoutConfigs } from '../../configs/layoutConfigs';
import { useUI } from '../../hooks';

export const Overlay = () => {
  const { displayOverlay, closeSidebar } = useUI();
  useOverlayController();
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

const useOverlayController = () => {
  const {
    isMobileSize,
    displaySidebar,
    displayOverlay,
    openOverlay,
    closeOverlay,
  } = useUI();

  useEffect(() => {
    if (displaySidebar) return;
    closeOverlay();
  }, [displaySidebar]);

  // モバイルサイズかつサイドバー表示中ならオーバーレイを表示する。
  useEffect(() => {
    if (displayOverlay) return;
    if (!isMobileSize || !displaySidebar) return;
    openOverlay();
  }, [displayOverlay, displaySidebar, isMobileSize]);

  // サイドバー表示中のモバイルサイズからデスクトップサイズに変わった場合、
  // オーバーレイを非表示にする。
  useEffect(() => {
    if (!isMobileSize && displaySidebar) closeOverlay();
  }, [displaySidebar, isMobileSize]);
};

// // デスクトップサイズからモバイルサイズに変わった場合、
// // デスクトップサイズでは固定表示のサイドバーを閉じる。
// useEffect(() => {
//   if (!isLg) closeSidebar();
// }, [isLg]);
