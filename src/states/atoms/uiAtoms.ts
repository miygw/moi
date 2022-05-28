import { atom } from 'recoil';

/**
 * 画面サイズを表すステート
 */
export const isMobileSizeState = atom<boolean>({
  key: 'IsMobileSize',
  default: true,
});

/**
 * ページ名を表すステート
 */
export const pageTitleState = atom<string>({
  key: 'PageTitle',
  default: '',
});

/**
 * サイドバーの表示状態を表すステート
 */
export const displaySidebarState = atom<boolean>({
  key: 'DisplaySidebar',
  default: false,
});

/**
 * オーバーレイの表示状態を表すステート
 */
export const displayOverlayState = atom<boolean>({
  key: 'DisplayOverlay',
  default: false,
});
