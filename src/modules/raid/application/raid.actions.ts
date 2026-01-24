import { createAction } from '@reduxjs/toolkit';

import type { RaidStructure } from '../domain/raid.models';

enum Types {
  READ_LIST = 'raid/readList',
  READ_DETAIL = 'raid/readDetail',
}

export const actions = {
  readList: createAction<RaidStructure[]>(Types.READ_LIST),
  readDetail: createAction<RaidStructure>(Types.READ_DETAIL),
};
