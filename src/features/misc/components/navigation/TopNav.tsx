import { useLocales } from '@/hooks/useLocales';
import { NavBar, ThemeSwitch, Title } from '@gatewatcher/skin';

import { LanguageSelector } from '../commons/LanguageSelector';

export const TopNav = () => {
  const { t } = useLocales('misc', { keyPrefix: 'common.topNav' });

  return (
    <NavBar
      endElement={
        <>
          <LanguageSelector />
          <ThemeSwitch />
        </>
      }
      startElement={
        <>
          <Title>{t('title')}</Title>
        </>
      }
    />
  );
};
