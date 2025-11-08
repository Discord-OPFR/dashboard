import Opfr from '@/components/icons/Opfr';
import { classNames } from '@gatewatcher/bistoury/utils-dom';
import { Stack, Title } from '@gatewatcher/skin';

import styles from './styles.module.scss';

type SideNavHeaderProps = {
  isOpened: boolean;
};

export const SideNavHeader = ({ isOpened }: SideNavHeaderProps) => {
  return (
    <Stack
      alignItems="center"
      className={styles.SideNavHeaderContainer}
      justifyContent="center"
    >
      <span
        className={classNames(
          styles.SideNavHeaderTitle,
          !isOpened && styles.SideNavHeaderTitleClosed,
        )}
      >
        <Title as="h2">OnePiece</Title>
      </span>
      <span
        className={classNames(
          styles.SideNavHeaderLogo,
          !isOpened && styles.SideNavHeaderLogoClosed,
        )}
      >
        <Opfr />
      </span>
      <span
        className={classNames(
          styles.SideNavHeaderTitle,
          !isOpened && styles.SideNavHeaderTitleClosed,
        )}
      >
        <Title>FR</Title>
      </span>
    </Stack>
  );
};
