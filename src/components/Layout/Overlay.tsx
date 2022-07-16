import { useEffect } from 'react';
import { layoutConfigs } from '~/constants/layoutConfigs';

import { useUIStates, useUIActions } from '~/hooks';

export const Overlay = () => {
  const { displayOverlay } = useUIStates();
  const { setDisplaySidebar } = useUIActions();

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
      onClick={() => setDisplaySidebar(false)}
    />
  );
};

/**
 * オーバーレイ表示状態の自動制御を行う。
 */
const useOverlayController = () => {
  const { ...states } = useUIStates();
  const { ...actions } = useUIActions();

  // TODO 意図を忘れた
  useEffect(() => {
    if (states.displaySidebar) return;
    actions.setDisplayOverlay(false);
  }, [actions, states.displaySidebar]);

  // モバイルサイズでサイドバー表示ならオーバーレイを表示する。
  useEffect(() => {
    if (!states.isMobileSize || !states.displaySidebar) return;
    actions.setDisplayOverlay(true);
  }, [
    actions,
    states.displayOverlay,
    states.displaySidebar,
    states.isMobileSize,
  ]);

  // サイドバー表示中のモバイルサイズからデスクトップサイズに変わった場合、
  // オーバーレイを非表示にする。
  useEffect(() => {
    if (!states.isMobileSize && states.displaySidebar)
      actions.setDisplayOverlay(false);
  }, [actions, states.displaySidebar, states.isMobileSize]);
};
