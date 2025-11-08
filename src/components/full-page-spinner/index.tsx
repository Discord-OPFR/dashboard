import { CircularLoader, Stack } from '@gatewatcher/skin';

import styles from './styles.module.scss';

export const FullPageSpinner = () => {
  return (
    <Stack
      alignItems="center"
      className={styles.container}
      justifyContent="center"
    >
      <CircularLoader size="xLarge" />
    </Stack>
  );
};
