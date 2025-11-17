import { createReducer } from '@reduxjs/toolkit';

import type { User } from '../domain/auth.entity';
import { actions } from './auth.actions';

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(actions.login, state => {
      state.isAuthenticated = true;
    })
    .addCase(actions.logout, state => {
      state.isAuthenticated = false;
    });
});
