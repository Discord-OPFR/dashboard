import { Grid, Stack } from '@gatewatcher/skin';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

import opfr from '@/assets/opfr.webp';
import { FullPageSpinner } from '@/components/full-page-spinner';

import styles from '../styles.module.scss';

type AuthenticationLayoutProps = {
  children: ReactNode;
};

export const AuthenticationLayout = ({
  children,
}: AuthenticationLayoutProps) => {
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <Grid
        alignItems="center"
        className={styles.Container}
        columns={2}
        gap={0}
        isContainer
      >
        <Grid isItem>
          <Stack
            alignItems="center"
            direction="column"
            gap={13}
            justifyContent="center"
          >
            {children}
          </Stack>
        </Grid>
        <Grid className={styles.ImageContainer} isItem>
          <img alt="" className={styles.Image} loading="lazy" src={opfr} />
        </Grid>
      </Grid>
    </Suspense>
  );
};
