import { RouteContainer } from '@gatewatcher/skin';

import { RaidTable } from '@/features/raid/components/listings/raid-table/RaidTable';
import { useLocales } from '@/hooks/useLocales';

export const RaidRoute = () => {
  const { t } = useLocales('raids', { keyPrefix: 'main' });

  return (
    <RouteContainer>
      <RouteContainer.Header title={t('title')} />
      <RouteContainer.Body>
        <RaidTable />
      </RouteContainer.Body>
    </RouteContainer>
  );
};
