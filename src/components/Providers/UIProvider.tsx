import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';

type UIState = {
  pageTitle: string;
  displaySidebar: boolean;
};

const UIStateValue: UIState = { pageTitle: '', displaySidebar: false };
const UIStateContext = createContext<UIState | null>(UIStateValue);

type UIActionType =
  | { type: 'SET_PAGE_TITLE'; value: string }
  | { type: 'OPEN_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' };

const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return { ...state, pageTitle: action.value };
    case 'OPEN_SIDEBAR':
      return { ...state, displaySidebar: true };
    case 'CLOSE_SIDEBAR':
      return { ...state, displaySidebar: false };
    default:
      return state;
  }
};

export type UIActions = {
  setPageTitle: (value: string) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
};
const UIActionsContext = createContext<UIActions | null>(null);

export const UIProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(uiReducer, UIStateValue);
  const setPageTitle = (value: string) =>
    dispatch({ type: 'SET_PAGE_TITLE', value });
  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });

  const actions: UIActions = { setPageTitle, openSidebar, closeSidebar };

  return (
    <UIStateContext.Provider value={state}>
      <UIActionsContext.Provider value={actions}>
        {children}
      </UIActionsContext.Provider>
    </UIStateContext.Provider>
  );
};

// For useUI
export const useUIState = () => useContext(UIStateContext);
export const useUIActions = () => useContext(UIActionsContext);
