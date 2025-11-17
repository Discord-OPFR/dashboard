import type { User } from '@/modules/auth/domain/auth.entity';

export interface AuthGateway {
  me(): Promise<User | null>;
}
