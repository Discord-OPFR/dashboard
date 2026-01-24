import * as storage from '@gatewatcher/bistoury/utils-web-storage';

import type { SettingsGateway } from '../application/settings.gateway';
import type { SettingsState } from '../application/settings.reducer';
import type { FlowSettings } from '../domain/settings.model';

const SETTINGS_KEY = 'opfr/dashboard/settings';

export class SettingsProvider implements SettingsGateway {
  async readFlow(): Promise<FlowSettings> {
    const settings = storage.get(SETTINGS_KEY);

    return (settings as SettingsState).flow;
  }

  async updateFlow(params: Partial<FlowSettings>): Promise<void> {
    const settings = storage.get(SETTINGS_KEY);
    const newSettings: SettingsState = {
      ...settings,
      flow: { ...(settings?.flow ?? {}), ...params },
    };

    storage.set(SETTINGS_KEY, newSettings);
  }
}
