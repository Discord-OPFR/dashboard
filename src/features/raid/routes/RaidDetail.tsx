import { ComponentBoundaries, RouteContainer } from '@gatewatcher/skin';
import { ReactFlowProvider } from '@xyflow/react';
import { useParams } from 'react-router-dom';

import { RaidFlow } from '@/features/raid/components/flow/RaidFlow';
import { useRaidDetail } from '@/features/raid/hooks/useRaidDetail';
import { useLocales } from '@/hooks/useLocales';

type RaidDetailRouteParams = {
  id: string;
};

export const RaidDetailRoute = () => {
  const { id = '' } = useParams<RaidDetailRouteParams>();
  const { t } = useLocales('raid', { keyPrefix: `main.id` });

  const { data, status } = useRaidDetail({ id });

  return (
    <RouteContainer>
      <RouteContainer.Header title={t('title', { id })} />
      <RouteContainer.Body>
        <ReactFlowProvider>
          <ComponentBoundaries data={data} status={status}>
            {raid => <RaidFlow raid={raid} />}
          </ComponentBoundaries>
        </ReactFlowProvider>
      </RouteContainer.Body>
    </RouteContainer>
  );
};
