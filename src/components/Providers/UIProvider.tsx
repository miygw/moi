import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useMediaQuery } from 'react-responsive';

export type UIState = {
  isMobileSize: boolean;
  pageTitle: string;
  displaySidebar: boolean;
  displayOverlay: boolean;
};

export type UIActionTypes =
  | { type: 'SET_IS_MOBILE_SIZE'; value: boolean }
  | { type: 'SET_PAGE_TITLE'; value: string }
  | { type: 'OPEN_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' }
  | { type: 'OPEN_OVERLAY' }
  | { type: 'CLOSE_OVERLAY' };

type UIActions = {
  setPageTitle: (value: string) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  openOverlay: () => void;
  closeOverlay: () => void;
};

// useUIでラップするため、exportしない。
const UIStateContext = createContext<UIState | null>(null);
const UIActionsContext = createContext<UIActions | null>(null);

export const UIProvider = ({ children }: PropsWithChildren<{}>) => {
  const reducer = createReducer();
  const initialState = createInitialState();
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: UIActions = createUIActions(dispatch);

  useDisplaySizeWatcher(dispatch);
  return (
    <UIStateContext.Provider value={state}>
      <UIActionsContext.Provider value={actions}>
        {children}
      </UIActionsContext.Provider>
    </UIStateContext.Provider>
  );
};

const createInitialState = () => {
  return {
    isMobileSize: true,
    pageTitle: '',
    displaySidebar: false,
    displayOverlay: false,
  } as UIState;
};

const createReducer = () => {
  return (state: UIState, actionType: UIActionTypes): UIState => {
    switch (actionType.type) {
      case 'SET_IS_MOBILE_SIZE':
        return { ...state, isMobileSize: actionType.value };
      case 'SET_PAGE_TITLE':
        return { ...state, pageTitle: actionType.value };
      case 'OPEN_SIDEBAR':
        return { ...state, displaySidebar: true };
      case 'CLOSE_SIDEBAR':
        return { ...state, displaySidebar: false };
      case 'OPEN_OVERLAY':
        return { ...state, displayOverlay: true };
      case 'CLOSE_OVERLAY':
        return { ...state, displayOverlay: false };
      default:
        return state;
    }
  };
};

const createUIActions = (dispatch: Dispatch<UIActionTypes>) => {
  const setPageTitle = (value: string) =>
    dispatch({ type: 'SET_PAGE_TITLE', value });
  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
  const openOverlay = () => dispatch({ type: 'OPEN_OVERLAY' });
  const closeOverlay = () => dispatch({ type: 'CLOSE_OVERLAY' });

  return {
    setPageTitle,
    openSidebar,
    closeSidebar,
    openOverlay,
    closeOverlay,
  } as UIActions;
};

const useDisplaySizeWatcher = (dispatch: Dispatch<UIActionTypes>) => {
  const isMobileSize = !useMediaQuery({ minWidth: 1024 });
  useEffect(() =>
    dispatch({ type: 'SET_IS_MOBILE_SIZE', value: isMobileSize })
  );
};

// For useUI
export const useUIState = () => useContext(UIStateContext);
export const useUIActions = () => useContext(UIActionsContext);

// // 1024pxは、Tailwindcssのデフォルトのlgブレークポイントの値。
// const isLg = useMediaQuery({ minWidth: 1024 });

// // サイドバー表示中のモバイルサイズからデスクトップサイズに変わった場合、
// // オーバーレイを非表示にする。
// useEffect(() => {
//   if (isLg && state.displaySidebar) dispatch({ type: 'CLOSE_OVERLAY' });
// }, [isLg, state.displaySidebar]);

// // デスクトップサイズからモバイルサイズに変わった場合、
// // デスクトップサイズでは固定表示のサイドバーを閉じる。
// useEffect(() => {
//   if (!isLg) closeSidebar();
// }, [isLg]);
