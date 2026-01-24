import {
  ComponentBoundaries,
  Input,
  RouteContainer,
  Stack,
} from '@gatewatcher/skin';
import { ReactFlowProvider } from '@xyflow/react';
import { useParams } from 'react-router-dom';

import { RaidFlow } from '@/features/raid/components/flow/RaidFlow';
import { useFlowSettings } from '@/features/raid/hooks/useFlowSettings';
import { useRaidDetail } from '@/features/raid/hooks/useRaidDetail';
import { useUpdateFlowSettings } from '@/features/raid/hooks/useUpdateFlowSettings';
import { useLocales } from '@/hooks/useLocales';
import {
  CROSSING_MINIMIZATION_STRATEGIES,
  NODE_PLACEMENT_STRATEGIES,
} from '@/modules/settings/domain/settings.model';
import { kebabCase } from '@opfr/utils-lang';

type RaidDetailRouteParams = {
  id: string;
};

export const RaidDetailRoute = () => {
  const { id = '' } = useParams<RaidDetailRouteParams>();
  const { t } = useLocales('raid', { keyPrefix: `main.id` });

  const { data, status } = useRaidDetail({ id });
  const { data: flow } = useFlowSettings();
  const { mutate } = useUpdateFlowSettings();

  return (
    <RouteContainer>
      <RouteContainer.Header
        actions={
          <Stack gap={4}>
            <Input.Select
              onChange={option => {
                if (option) {
                  mutate({ crossingMinimizationStrategy: option.value });
                }
              }}
              options={CROSSING_MINIMIZATION_STRATEGIES.map(value => ({
                value,
                label: kebabCase(value),
              }))}
              isClearable={false}
              label="Crossing strategy"
              labelDirection="row"
              value={flow.crossingMinimizationStrategy}
            />
            <Input.Select
              onChange={option => {
                if (option) {
                  mutate({ nodePlacementStrategy: option.value });
                }
              }}
              options={NODE_PLACEMENT_STRATEGIES.map(value => ({
                value,
                label: kebabCase(value),
              }))}
              isClearable={false}
              label="Node placement strategy"
              labelDirection="row"
              value={flow.nodePlacementStrategy}
            />
          </Stack>
        }
        title={t('title', { id })}
      />
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
