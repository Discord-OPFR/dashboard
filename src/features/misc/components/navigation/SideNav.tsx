import { SideNav as SkinSideNav } from '@gatewatcher/skin';

import { PATHS } from '@/config/paths';
import { SideNavHeader } from '@/features/misc/components/navigation/SideNavHeader';
import { useLocales } from '@/hooks/useLocales';

export const SideNav = () => {
  const { t } = useLocales('misc', { keyPrefix: 'common.sideNav' });

  return (
    <SkinSideNav
      header={
        <SkinSideNav.Header>
          {({ isOpened }) => <SideNavHeader isOpened={isOpened} />}
        </SkinSideNav.Header>
      }
      withPoweredByGatewatcher={false}
    >
      <SkinSideNav.Link icon="GridMenu" to={PATHS.home}>
        {t('home')}
      </SkinSideNav.Link>
      <SkinSideNav.Link icon="Box" to={PATHS.entity.base}>
        {t('entity')}
      </SkinSideNav.Link>
      <SkinSideNav.Link icon="3DCurve" to={PATHS.raid.base}>
        {t('raids')}
      </SkinSideNav.Link>
    </SkinSideNav>
  );
};
