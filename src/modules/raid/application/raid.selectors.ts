import type { AppState } from '@/store/appState';

const list = (state: AppState) => {
  return state.raid.list;
};

const detail = (state: AppState) => {
  return state.raid.detail;
};

export const raidSelectors = {
  list,
  detail,
};
