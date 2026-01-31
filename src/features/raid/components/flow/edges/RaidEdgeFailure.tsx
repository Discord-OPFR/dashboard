import type { EdgeProps } from '@xyflow/react';

import { BaseRaidEdge } from '../base/BaseRaidEdge';

import styles from '../styles.module.scss';

export const RaidEdgeFailure = (props: EdgeProps) => {
  return <BaseRaidEdge {...props} className={styles.FlowEdgeFailure} />;
};
