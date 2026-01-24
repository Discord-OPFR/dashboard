import type { AuthState } from '@/modules/auth/application/auth.reducer';
import type { RaidState } from '@/modules/raid/application/raid.reducer';

export type AppState = {
  auth: AuthState;
  raid: RaidState;
};
