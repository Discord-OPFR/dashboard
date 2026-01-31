import type { AuthState } from '@/modules/auth/application/auth.reducer';
import type { RaidState } from '@/modules/raid/application/raid.reducer';
import type { SettingsState } from '@/modules/settings/application/settings.reducer';

export type AppState = {
  auth: AuthState;
  raid: RaidState;
  settings: SettingsState;
};
