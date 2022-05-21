import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { UIController } from './UIController';

export type UIState = {
  isMobileSize: boolean;
  pageTitle: string;
  displaySidebar: boolean;
  displayOverlay: boolean;
};

export type UIActionType =
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
};

// useUIでラップするため、exportしない。
const UIStateContext = createContext<UIState | null>(null);
const UIActionsContext = createContext<UIActions | null>(null);

export const UIProvider = ({ children }: PropsWithChildren<{}>) => {
  const initialState: UIState = {
    isMobileSize: true,
    pageTitle: '',
    displaySidebar: false,
    displayOverlay: false,
  };

  // 1024pxは、Tailwindcssのデフォルトのlgブレークポイントの値。
  const isLg = useMediaQuery({ minWidth: 1024 });

  const reducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
      case 'SET_IS_MOBILE_SIZE':
        return { ...state, isMobileSize: action.value };
      case 'SET_PAGE_TITLE':
        return { ...state, pageTitle: action.value };
      case 'OPEN_SIDEBAR':
        return { ...state, displaySidebar: true, displayOverlay: !isLg };
      case 'CLOSE_SIDEBAR':
        // デスクトップサイズならサイドバーは常に表示する
        if (isLg) return state;
        return { ...state, displaySidebar: false, displayOverlay: false };
      case 'OPEN_OVERLAY':
        return { ...state, displayOverlay: true };
      case 'CLOSE_OVERLAY':
        return { ...state, displayOverlay: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setPageTitle = (value: string) =>
    dispatch({ type: 'SET_PAGE_TITLE', value });
  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
  // オーバーレイの制御はこのコンポーネントで行うため配信しない。
  const actions: UIActions = { setPageTitle, openSidebar, closeSidebar };

  // サイドバー表示中のモバイルサイズからデスクトップサイズに変わった場合、
  // オーバーレイを非表示にする。
  useEffect(() => {
    if (isLg && state.displaySidebar) dispatch({ type: 'CLOSE_OVERLAY' });
  }, [isLg, state.displaySidebar]);

  // デスクトップサイズからモバイルサイズに変わった場合、
  // デスクトップサイズでは固定表示のサイドバーを閉じる。
  useEffect(() => {
    if (!isLg) closeSidebar();
  }, [isLg]);

  return (
    <UIStateContext.Provider value={state}>
      <UIActionsContext.Provider value={actions}>
        <UIController state={state} dispatch={dispatch} />
        {children}
      </UIActionsContext.Provider>
    </UIStateContext.Provider>
  );
};

// For useUI
export const useUIState = () => useContext(UIStateContext);
export const useUIActions = () => useContext(UIActionsContext);
