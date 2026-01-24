import { useQuery } from '@tanstack/react-query';

import { actions } from '@/modules/settings/application/settings.actions';
import { settingsSelectors } from '@/modules/settings/application/settings.selectors';
import { readFlowSettings } from '@/modules/settings/application/use-cases/readFlowSettings';
import { useAppDispatch, useAppSelector } from '@/store/reduxStore';
import type { QueryParams } from '@/types/queries';
import { getStatus } from '@/utils/query';

export const useFlowSettings = (options?: QueryParams) => {
  const dispatch = useAppDispatch();

  const query = useQuery({
    queryKey: [actions.readFlow.type],
    queryFn: async () => {
      await dispatch(readFlowSettings());
      return null;
    },
    retry: false,
    enabled: options?.enabled ?? true,
  });

  const data = useAppSelector(settingsSelectors.flow);

  return {
    ...query,
    status: getStatus(query),
    data,
  };
};
