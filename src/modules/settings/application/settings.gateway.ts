import type { FlowSettings } from '../domain/settings.model';

export interface SettingsGateway {
  readFlow(): Promise<FlowSettings>;

  updateFlow(params: Partial<FlowSettings>): Promise<void>;
}
