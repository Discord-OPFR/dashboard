import { createReducer } from '@reduxjs/toolkit';

import type { FlowSettings } from '../domain/settings.model';
import { actions } from './settings.actions';

export type SettingsState = {
  flow: FlowSettings;
};

const initialState: SettingsState = {
  flow: {
    crossingMinimizationStrategy: 'LAYER_SWEEP',
    nodePlacementStrategy: 'BRANDES_KOEPF',
  },
};

export const settingsReducer = createReducer(initialState, builder => {
  builder.addCase(actions.readFlow, (state, action) => {
    state.flow = {
      ...state.flow,
      ...action.payload,
    };
  });
});
