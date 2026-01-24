import type { AppThunk } from '@/store/reduxStore';
import { authUseCaseErrorHandler } from '@/utils/store';

import { actions } from '../raid.actions';

export const readRaidDetail: (id: string) => AppThunk =
  id =>
  async (dispatch, _getState, { raidProvider }) => {
    try {
      const raid = await raidProvider.detail(id);

      dispatch(actions.readDetail(raid));
    } catch (error) {
      await authUseCaseErrorHandler(dispatch, error, readRaidDetail, [id]);
    }
  };
