import { useUIActions, useUIState } from '../components/Providers/UIProvider';

const useUI = () => {
  const stateContext = useUIState();
  const actionsContext = useUIActions();

  if (stateContext === null || actionsContext === null) {
    throw new Error('UIProviderの子コンポーネントから呼び出してください。');
  }

  return { ...stateContext, ...actionsContext };
};

export default useUI;
