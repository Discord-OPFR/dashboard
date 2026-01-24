import type { AppState } from '@/store/appState';

const flow = (state: AppState) => {
  return state.settings.flow;
};

export const settingsSelectors = {
  flow,
};
