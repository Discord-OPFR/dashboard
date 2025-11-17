import type { AuthState } from '@/modules/auth/application/auth.reducer';

export type AppState = {
  auth: AuthState;
};
