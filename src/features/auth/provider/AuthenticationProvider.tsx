import type { ReactNode } from 'react';

import { authSelectors } from '@/modules/auth/application/auth.selectors';
import { useAppSelector } from '@/store/reduxStore';
import { CircularLoader, LoaderState } from '@gatewatcher/skin';

import { useCurrentUser } from '../hooks/useCurrentUser';

type AuthProviderProps = {
  children: (isAuthenticated: boolean) => ReactNode;
};

export const AuthenticationProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = useAppSelector(authSelectors.authState);

  const { isLoading } = useCurrentUser();

  return (
    <LoaderState
      containerStyle={{ height: '100vh' }}
      isLoading={isLoading}
      loader={<CircularLoader size="xLarge" />}
    >
      {children(isAuthenticated)}
    </LoaderState>
  );
};
