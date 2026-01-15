import { actions } from '@/modules/auth/application/auth.actions';
import type { AppThunk } from '@/store/reduxStore';
import { authUseCaseErrorHandler } from '@/utils/store';

export const readMe: () => AppThunk =
  () =>
  async (dispatch, _getState, { authProvider }) => {
    try {
      const user = await authProvider.me();

      dispatch(actions.login());
      dispatch(actions.setUser(user));
    } catch (error) {
      await authUseCaseErrorHandler(dispatch, error, readMe);
    }
  };
