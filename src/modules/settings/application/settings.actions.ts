import { createAction } from '@reduxjs/toolkit';

import type { FlowSettings } from '../domain/settings.model';

enum Types {
  READ_FLOW_SETTINGS = 'settings/readFlowSettings',

  UPDATE_FLOW_SETTINGS = 'settings/updateFlowSettings',
}

export const actions = {
  readFlow: createAction<FlowSettings>(Types.READ_FLOW_SETTINGS),

  updateFlow: createAction<Partial<FlowSettings>>(Types.UPDATE_FLOW_SETTINGS),
};
