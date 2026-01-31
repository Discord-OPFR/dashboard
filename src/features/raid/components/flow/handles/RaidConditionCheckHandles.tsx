import styles from '@/features/raid/components/flow/styles.module.scss';
import type { RaidNode } from '@/modules/raid/domain/raid.models';

import { BaseRaidHandle } from '../base/BaseRaidHandle';

type RaidConditionCheckHandlesProps = {
  node: RaidNode;
};

export const RaidConditionCheckHandles = ({
  node,
}: RaidConditionCheckHandlesProps) => {
  return (
    <>
      <BaseRaidHandle node={node} type="target" />
      <BaseRaidHandle
        className={styles.FlowHandleSuccess}
        connectionLimit={1}
        id="success"
        node={node}
        type="source"
      />
      <BaseRaidHandle
        className={styles.FlowHandleFailure}
        connectionLimit={1}
        id="failure"
        node={node}
        type="source"
      />
    </>
  );
};
