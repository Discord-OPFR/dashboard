import {
  Button,
  Placeholder,
  RouteContainer,
  Stack,
  Text,
  Title,
} from '@gatewatcher/skin';

import { useLocales } from '@/hooks/useLocales';

export const Unauthorized = () => {
  const { t } = useLocales('misc', { keyPrefix: 'pages.unauthorized' });

  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/login?origin=${window.location.origin}`;
  };

  return (
    <RouteContainer>
      <RouteContainer.Body>
        <Stack
          alignItems="center"
          direction="column"
          gap={5}
          justifyContent="center"
        >
          <Placeholder.Illustration name="SoftwareConnect" />
          <Title>{t('title')}</Title>
          <Text>{t('description')}</Text>
          <Button onClick={handleLogin} variant="outlined">
            {t('login')}
          </Button>
        </Stack>
      </RouteContainer.Body>
    </RouteContainer>
  );
};
