import {
  isMobileSizeState,
  pageTitleState,
  displaySidebarState,
  displayOverlayState,
} from '../states/atoms/uiAtoms';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';

/**
 * UIの状態の一覧を表す。
 */
type UIStates = {
  isMobileSize: boolean;
  pageTitle: string;
  displaySidebar: boolean;
  displayOverlay: boolean;
};

/**
 * UIの状態の一覧を取得する。
 */
export const useUIStates = () => {
  return {
    isMobileSize: useRecoilValue(isMobileSizeState),
    pageTitle: useRecoilValue(pageTitleState),
    displaySidebar: useRecoilValue(displaySidebarState),
    displayOverlay: useRecoilValue(displayOverlayState),
  } as UIStates;
};

/**
 * UIを制御する処理の一覧を表す。
 */
type UIActions = {
  setIsMobileSize: SetterOrUpdater<boolean>;
  setPageTitle: SetterOrUpdater<string>;
  setDisplaySidebar: SetterOrUpdater<boolean>;
  setDisplayOverlay: SetterOrUpdater<boolean>;
};

/**
 * UIを制御する処理の一覧を取得する。
 */
export const useUIActions = () => {
  return {
    setIsMobileSize: useSetRecoilState(isMobileSizeState),
    setPageTitle: useSetRecoilState(pageTitleState),
    setDisplaySidebar: useSetRecoilState(displaySidebarState),
    setDisplayOverlay: useSetRecoilState(displayOverlayState),
  } as UIActions;
};
