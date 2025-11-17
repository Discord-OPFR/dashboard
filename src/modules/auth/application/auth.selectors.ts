import type { AppState } from '@/store/appState';

const authState = (state: AppState) => {
  return state.auth.isAuthenticated;
};

const me = (state: AppState) => {
  return state.auth.user;
};

export const authSelectors = {
  authState,
  me,
};
