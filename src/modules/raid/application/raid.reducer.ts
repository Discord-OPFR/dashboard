import { createReducer } from '@reduxjs/toolkit';

import type { RaidStructure } from '../domain/raid.models';
import { actions } from './raid.actions';

export type RaidState = {
  list: RaidStructure[];
  detail?: RaidStructure;
};

const initialState: RaidState = {
  list: [],
};

export const raidReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.readList, (state, action) => {
      state.list = action.payload;
    })
    .addCase(actions.readDetail, (state, action) => {
      state.detail = action.payload;
    });
});
