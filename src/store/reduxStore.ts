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
import type { RaidGateway } from '@/modules/raid/application/raid.gateway';
import { raidReducer } from '@/modules/raid/application/raid.reducer';
import { RaidProvider } from '@/modules/raid/infrastructure/RaidProvider';
import type { AppState } from '@/store/appState';

export type Dependencies = {
  authProvider: AuthGateway;
  raidProvider: RaidGateway;
};

export const initReduxStore = (dependencies: Dependencies) => {
  return configureStore({
    reducer: {
      auth: authReducer,
      raid: raidReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: { extraArgument: dependencies } }),
  });
};

export const reduxStore = initReduxStore({
  authProvider: new AuthProvider(),
  raidProvider: new RaidProvider(),
});

export type AppThunk<R = unknown> = ThunkAction<
  R,
  AppState,
  Dependencies,
  Action
>;

export type AppDispatch = ThunkDispatch<AppState, Dependencies, UnknownAction>;

export type ReduxStore = Omit<Store<AppState>, 'dispatch'> & {
  dispatch: AppDispatch;
};

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
