import { RouteContainer, Title } from '@gatewatcher/skin';

import { useLocales } from '@/hooks/useLocales';

export const Home = () => {
  const { t } = useLocales('home', { keyPrefix: 'main' });

  return (
    <RouteContainer>
      <RouteContainer.Header title={<Title as="h3">{t('title')}</Title>} />
      <RouteContainer.Body>{t('default')}</RouteContainer.Body>
    </RouteContainer>
  );
};
