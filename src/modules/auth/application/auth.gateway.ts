import type { User } from '@/modules/auth/domain/auth.models';

export interface AuthGateway {
  me(): Promise<User>;
}
