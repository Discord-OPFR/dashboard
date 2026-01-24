import type { AppThunk } from '@/store/reduxStore';
import { authUseCaseErrorHandler } from '@/utils/store';

import { actions } from '../settings.actions';

export const readFlowSettings: () => AppThunk =
  () =>
  async (dispatch, _getState, { settingsProvider }) => {
    try {
      const flow = await settingsProvider.readFlow();

      dispatch(actions.readFlow(flow));
    } catch (error) {
      await authUseCaseErrorHandler(dispatch, error, readFlowSettings);
    }
  };
