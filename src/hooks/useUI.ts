import { useUIActions, useUIState } from '../components/Providers/UIProvider';

export const useUI = () => {
  const stateContext = useUIState();
  const actionsContext = useUIActions();

  if (stateContext === null || actionsContext === null) {
    throw new Error('UIProviderの子コンポーネントから呼び出してください。');
  }

  return { ...stateContext, ...actionsContext };
};
