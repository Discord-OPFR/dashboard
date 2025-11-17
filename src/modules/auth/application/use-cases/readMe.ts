import { actions } from '@/modules/auth/application/auth.actions';
import type { AppThunk } from '@/store/reduxStore';

export const readMe: () => AppThunk =
  () =>
  async (dispatch, _getState, { authProvider }) => {
    try {
      const user = await authProvider.me();

      if (user) {
        dispatch(actions.login());
        dispatch(actions.setUser(user));
      } else {
        dispatch(actions.logout());
        throw new Error('No user logged in');
      }
    } catch (error) {
      dispatch(actions.logout());
      throw error;
    }
  };
