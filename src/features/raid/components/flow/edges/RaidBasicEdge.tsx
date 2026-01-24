import { classNames } from '@gatewatcher/bistoury/utils-dom';
import type { EdgeProps } from '@xyflow/react';

import { BaseRaidEdge } from '../base/BaseRaidEdge';

import styles from '../styles.module.scss';

export const RaidBasicEdge = (props: EdgeProps) => {
  return (
    <BaseRaidEdge
      {...props}
      className={classNames(styles[`FlowEdge${props.type}`])}
    />
  );
};
