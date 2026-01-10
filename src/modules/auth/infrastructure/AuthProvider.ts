import { AuthService } from '@/api';

import type { AuthGateway } from '../application/auth.gateway';

export class AuthProvider implements AuthGateway {
  me() {
    return AuthService.me();
  }
}
