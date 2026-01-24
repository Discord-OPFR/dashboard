import { RouteContainer } from '@gatewatcher/skin';

import { useLocales } from '@/hooks/useLocales';

import { RaidTable } from '../components/listings/raid-table/RaidTable';

export const RaidRoute = () => {
  const { t } = useLocales('raid', { keyPrefix: 'main.root' });

  return (
    <RouteContainer>
      <RouteContainer.Header title={t('title')} />
      <RouteContainer.Body>
        <RaidTable />
      </RouteContainer.Body>
    </RouteContainer>
  );
};
