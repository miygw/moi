import {
  isMobileSizeState,
  pageTitleState,
  displaySidebarState,
  displayOverlayState,
} from './../recoil/atoms/uiAtoms';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';

type UIStates = {
  isMobileSize: boolean;
  pageTitle: string;
  displaySidebar: boolean;
  displayOverlay: boolean;
};

export const useUIStates = () => {
  return {
    isMobileSize: useRecoilValue(isMobileSizeState),
    pageTitle: useRecoilValue(pageTitleState),
    displaySidebar: useRecoilValue(displaySidebarState),
    displayOverlay: useRecoilValue(displayOverlayState),
  } as UIStates;
};

type UIActions = {
  setIsMobileSize: SetterOrUpdater<boolean>;
  setPageTitle: SetterOrUpdater<string>;
  setDisplaySidebar: SetterOrUpdater<boolean>;
  setDisplayOverlay: SetterOrUpdater<boolean>;
};

export const useUIActions = () => {
  return {
    setIsMobileSize: useSetRecoilState(isMobileSizeState),
    setPageTitle: useSetRecoilState(pageTitleState),
    setDisplaySidebar: useSetRecoilState(displaySidebarState),
    setDisplayOverlay: useSetRecoilState(displayOverlayState),
  } as UIActions;
};
