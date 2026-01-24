import type { AppThunk } from '@/store/reduxStore';
import { authUseCaseErrorHandler } from '@/utils/store';

import { actions } from '../raid.actions';

export const readRaidList: () => AppThunk =
  () =>
  async (dispatch, _getState, { raidProvider }) => {
    try {
      const raidStructures = await raidProvider.list();

      dispatch(actions.readList(raidStructures));
    } catch (error) {
      await authUseCaseErrorHandler(dispatch, error, readRaidList);
    }
  };
