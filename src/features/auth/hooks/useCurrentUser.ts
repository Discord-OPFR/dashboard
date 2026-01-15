import { useQuery } from '@tanstack/react-query';

import { authSelectors } from '@/modules/auth/application/auth.selectors';
import { readMe } from '@/modules/auth/application/use-cases/readMe';
import { useAppDispatch, useAppSelector } from '@/store/reduxStore';

export const useCurrentUser = (options?: {
  suspense?: boolean;
  enabled?: boolean;
}) => {
  const dispatch = useAppDispatch();

  const query = useQuery({
    queryKey: [],
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
