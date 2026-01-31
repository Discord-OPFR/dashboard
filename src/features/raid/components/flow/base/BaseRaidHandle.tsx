import { classNames } from '@gatewatcher/bistoury/utils-dom';
import type { HandleProps } from '@xyflow/react';
import { Handle, Position, useNodeConnections } from '@xyflow/react';

import type { RaidNode } from '@/modules/raid/domain/raid.models';

import styles from '../styles.module.scss';

type BaseRaidHandleProps = Omit<HandleProps, 'position' | 'isConnectable'> & {
  className?: string;
  node: RaidNode;
  connectionLimit?: number;
};

export const BaseRaidHandle = ({
  className,
  node,
  connectionLimit = Infinity,
  type,
  ...props
}: BaseRaidHandleProps) => {
  const connections = useNodeConnections({
    id: node.id,
    handleType: type,
    handleId: props.id ?? undefined,
  });

  return (
    <Handle
      {...props}
      className={classNames(
        className,
        styles.FlowHandle,
        connectionLimit <= connections.length && styles.FlowHandleDisabled,
      )}
      isConnectable={connectionLimit > connections.length}
      position={type === 'source' ? Position.Right : Position.Left}
      type={type}
    />
  );
};
