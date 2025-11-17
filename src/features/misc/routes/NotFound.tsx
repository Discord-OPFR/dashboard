import { useLocales } from '@/hooks/useLocales';
import {
  Placeholder,
  RouteContainer,
  Stack,
  Text,
  Title,
} from '@gatewatcher/skin';

export const NotFound = () => {
  const { t } = useLocales('misc', { keyPrefix: 'pages.notFound' });

  return (
    <RouteContainer>
      <RouteContainer.Header title={t('title')} />
      <RouteContainer.Body>
        <Stack
          alignItems="center"
          direction="column"
          gap={5}
          justifyContent="center"
        >
          <Placeholder.Illustration name="404Error" />
          <Title>{t('title')}</Title>
          <Text>{t('description')}</Text>
        </Stack>
      </RouteContainer.Body>
    </RouteContainer>
  );
};
