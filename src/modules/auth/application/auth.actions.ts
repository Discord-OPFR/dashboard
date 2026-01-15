import { createAction } from '@reduxjs/toolkit';

import type { User } from '../domain/auth.models';

enum Types {
  LOGIN = 'auth/login',
  LOGOUT = 'auth/logout',
  SET_USER = 'auth/setUser',
}

export const actions = {
  login: createAction(Types.LOGIN),
  logout: createAction(Types.LOGOUT),
  setUser: createAction<User | null>(Types.SET_USER),
};
