import { useQuery } from '@tanstack/react-query';

import { actions } from '@/modules/auth/application/auth.actions';
import { authSelectors } from '@/modules/auth/application/auth.selectors';
import { readMe } from '@/modules/auth/application/use-cases/readMe';
import { useAppDispatch, useAppSelector } from '@/store/reduxStore';
import type { QueryParams } from '@/types/queries';

export const useCurrentUser = (options?: QueryParams) => {
  const dispatch = useAppDispatch();

  const query = useQuery({
    queryKey: [actions.setUser.type],
    queryFn: async () => {
      await dispatch(readMe());
      return null;
    },
    retry: false,
    refetchInterval: 1000 * 60,
    staleTime: 5 * 60 * 1000,
    enabled: options?.enabled ?? true,
  });

  const data = useAppSelector(authSelectors.me);

  return {
    ...query,
    data,
  };
};
