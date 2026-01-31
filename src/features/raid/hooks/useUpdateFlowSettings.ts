import { useMutation, useQueryClient } from '@tanstack/react-query';

import { actions } from '@/modules/settings/application/settings.actions';
import { updateFlowSettings } from '@/modules/settings/application/use-cases/updateFlowSettings';
import type { FlowSettings } from '@/modules/settings/domain/settings.model';
import { useAppDispatch } from '@/store/reduxStore';

export const useUpdateFlowSettings = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: Partial<FlowSettings>) => {
      await dispatch(updateFlowSettings(params));
      return null;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [actions.readFlow.type] });
    },
    retry: false,
  });
};
