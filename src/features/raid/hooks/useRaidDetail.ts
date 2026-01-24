import { useQuery } from '@tanstack/react-query';

import { actions } from '@/modules/raid/application/raid.actions';
import { raidSelectors } from '@/modules/raid/application/raid.selectors';
import { readRaidDetail } from '@/modules/raid/application/use-cases/readRaidDetail';
import { useAppDispatch, useAppSelector } from '@/store/reduxStore';
import type { QueryParams } from '@/types/queries';
import { getStatus } from '@/utils/query';

type UseRaidDetailParams = {
  id: string;
};

export const useRaidDetail = (
  { id }: UseRaidDetailParams,
  options?: QueryParams,
) => {
  const dispatch = useAppDispatch();

  const query = useQuery({
    queryKey: [actions.readDetail.type, id],
    queryFn: async () => {
      await dispatch(readRaidDetail(id));
      return null;
    },
    retry: false,
    staleTime: 0,
    enabled: options?.enabled ?? true,
  });

  const data = useAppSelector(raidSelectors.detail);

  return {
    ...query,
    status: getStatus(query),
    data,
  };
};
