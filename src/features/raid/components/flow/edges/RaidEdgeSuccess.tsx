import type { EdgeProps } from '@xyflow/react';

import { BaseRaidEdge } from '../base/BaseRaidEdge';

import styles from '../styles.module.scss';

export const RaidEdgeSuccess = (props: EdgeProps) => {
  return <BaseRaidEdge {...props} className={styles.FlowEdgeSuccess} />;
};
