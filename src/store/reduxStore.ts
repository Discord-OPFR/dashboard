import type {
  Action,
  Store,
  ThunkAction,
  ThunkDispatch,
  UnknownAction,
} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

import type { AuthGateway } from '@/modules/auth/application/auth.gateway';
import { authReducer } from '@/modules/auth/application/auth.reducer';
import { AuthProvider } from '@/modules/auth/infrastructure/AuthProvider';
import type { AppState } from '@/store/appState';

export type Dependencies = {
  authProvider: AuthGateway;
};

export const initReduxStore = (dependencies: Dependencies) => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: { extraArgument: dependencies } }),
  });
};

export const reduxStore = initReduxStore({ authProvider: new AuthProvider() });

export type AppThunk<R = unknown> = ThunkAction<
  R,
  AppState,
  Dependencies,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<AppState, Dependencies, UnknownAction>;

export type ReduxStore = Omit<Store<AppState, UnknownAction>, 'dispatch'> & {
  dispatch: AppDispatch;
};

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useReduxSelector;

export const store = reduxStore;
