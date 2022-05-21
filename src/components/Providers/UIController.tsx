import { Dispatch, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { UIActionType, UIState } from './UIProvider';

type Props = { state: UIState; dispatch: Dispatch<UIActionType> };

export const UIController = ({ state, dispatch }: Props) => {
  useDisplaySizeWatcher(dispatch);
  controlOverlay(state, dispatch);

  return <></>;
};

const useDisplaySizeWatcher = (dispatch: Dispatch<UIActionType>) => {
  const isMobileSize = !useMediaQuery({ minWidth: 1024 });
  useEffect(() =>
    dispatch({ type: 'SET_IS_MOBILE_SIZE', value: isMobileSize })
  );
};

const controlOverlay = (state: UIState, dispatch: Dispatch<UIActionType>) => {
  controlSidebarOverlay(state, dispatch);
  controlModalOverlay(state, dispatch);
};

const controlSidebarOverlay = (
  state: UIState,
  dispatch: Dispatch<UIActionType>
) => {
  if (!state.isMobileSize) return;
  if (!state.displaySidebar) return;
  dispatch({ type: 'OPEN_OVERLAY' });
};

const controlModalOverlay = (
  state: UIState,
  dispatch: Dispatch<UIActionType>
) => {
  // TODO
};
