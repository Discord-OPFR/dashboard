import { useQuery } from '@tanstack/react-query';

import { actions } from '@/modules/raid/application/raid.actions';
import { raidSelectors } from '@/modules/raid/application/raid.selectors';
import { readRaidList } from '@/modules/raid/application/use-cases/readRaidList';
import { useAppDispatch, useAppSelector } from '@/store/reduxStore';
import type { QueryParams } from '@/types/queries';

export const useRaidList = (options?: QueryParams) => {
  const dispatch = useAppDispatch();

  const query = useQuery({
    queryKey: [actions.readList.type],
    queryFn: async () => {
      await dispatch(readRaidList());
      return null;
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
    enabled: options?.enabled ?? true,
  });

  const data = useAppSelector(raidSelectors.list);

  return {
    ...query,
    data,
  };
};
