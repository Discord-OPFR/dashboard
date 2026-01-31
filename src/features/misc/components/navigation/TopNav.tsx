import { NavBar, Stack, ThemeSwitch, Title } from '@gatewatcher/skin';

import { ProfileAvatar } from '@/features/misc/components/commons/ProfileAvatar';
import { useLocales } from '@/hooks/useLocales';

import { LanguageSelector } from '../commons/LanguageSelector';

export const TopNav = () => {
  const { t } = useLocales('misc', { keyPrefix: 'common.topNav' });

  return (
    <NavBar
      endElement={
        <Stack alignItems="center" gap={8}>
          <LanguageSelector />
          <ThemeSwitch />
          <ProfileAvatar />
        </Stack>
      }
      startElement={
        <>
          <Title>{t('title')}</Title>
        </>
      }
    />
  );
};
