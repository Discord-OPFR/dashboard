import type { FlowSettings } from '@/modules/settings/domain/settings.model';
import type { AppThunk } from '@/store/reduxStore';
import { authUseCaseErrorHandler } from '@/utils/store';

import { actions } from '../settings.actions';

export const updateFlowSettings: (params: Partial<FlowSettings>) => AppThunk =
  params =>
  async (dispatch, _getState, { settingsProvider }) => {
    try {
      await settingsProvider.updateFlow(params);

      dispatch(actions.updateFlow(params));
    } catch (error) {
      await authUseCaseErrorHandler(
        dispatch,
        error,
        updateFlowSettings,
        params,
      );
    }
  };
