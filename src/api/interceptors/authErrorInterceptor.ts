import { Auth } from '@/api';
import type { ErrorTypes } from '@/api';
import { actions } from '@/modules/auth/application/auth.actions';
import { reduxStore } from '@/store/reduxStore';

import { client } from '../generated/client.gen';

type ApiError = {
  message?: ErrorTypes;
  error?: string;
  statusCode?: number;
};

let isRefreshing = false;
let refreshPromise: Promise<unknown> | null = null;

export const isTokenExpiredError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    (error as ApiError).message === 'TOKEN_EXPIRED'
  );
};

export const isRefreshExpiredError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    (error as ApiError).message === 'REFRESH_EXPIRED'
  );
};

export const isNoTokenError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    (error as ApiError).message === 'NO_TOKEN'
  );
};

export const refreshToken = async (): Promise<boolean> => {
  if (isRefreshing && refreshPromise) {
    try {
      await refreshPromise;
      return true;
    } catch {
      return false;
    }
  }

  try {
    isRefreshing = true;
    refreshPromise = Auth.refresh();
    await refreshPromise;
    return true;
  } catch (error) {
    if (isRefreshExpiredError(error)) {
      reduxStore.dispatch(actions.logout());
    }
    return false;
  } finally {
    isRefreshing = false;
    refreshPromise = null;
  }
};

export const setupAuthErrorInterceptor = () => {
  client.interceptors.error.use(
    async (error: unknown, _response: Response, request: Request) => {
      if (request.url.includes('/auth/refresh')) {
        return error;
      }

      if (isRefreshExpiredError(error) || isNoTokenError(error)) {
        reduxStore.dispatch(actions.logout());
      }

      return error;
    },
  );
};
