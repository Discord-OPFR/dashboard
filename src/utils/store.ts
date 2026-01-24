import {
  isTokenExpiredError,
  refreshToken,
} from '@/interceptors/authErrorInterceptor';
import { actions } from '@/modules/auth/application/auth.actions';
import type { AppDispatch, AppThunk } from '@/store/reduxStore';

export const authUseCaseErrorHandler = async (
  dispatch: AppDispatch,
  error: unknown,
  thunk: () => AppThunk,
) => {
  if (isTokenExpiredError(error)) {
    const refreshed = await refreshToken();

    if (refreshed) {
      dispatch(thunk());
    } else {
      dispatch(actions.logout());
      throw error;
    }
  } else {
    console.error(error);
    throw error;
  }
};
