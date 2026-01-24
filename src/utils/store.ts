import {
  isTokenExpiredError,
  refreshToken,
} from '@/interceptors/authErrorInterceptor';
import { actions } from '@/modules/auth/application/auth.actions';
import type { AppDispatch, AppThunk } from '@/store/reduxStore';

export async function authUseCaseErrorHandler(
  dispatch: AppDispatch,
  error: unknown,
  thunk: () => AppThunk,
): Promise<void>;
export async function authUseCaseErrorHandler<T>(
  dispatch: AppDispatch,
  error: unknown,
  thunk: (_: T) => AppThunk,
  args: T,
): Promise<void>;
export async function authUseCaseErrorHandler<T>(
  dispatch: AppDispatch,
  error: unknown,
  thunk: (_?: T) => AppThunk,
  args?: T,
) {
  if (isTokenExpiredError(error)) {
    const refreshed = await refreshToken();

    if (refreshed) {
      dispatch(thunk(args));
    } else {
      dispatch(actions.logout());
      throw error;
    }
  } else {
    console.error(error);
    throw error;
  }
}
