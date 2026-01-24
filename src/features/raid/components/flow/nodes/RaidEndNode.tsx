import type { NodeProps } from '@xyflow/react';

import { BaseRaidHandle } from '../base/BaseRaidHandle';
import { BaseRaidNode } from '../base/BaseRaidNode';
import type { RaidEndNodeType } from '../types';

type RaidEndNodeProps = NodeProps<RaidEndNodeType>;

export const RaidEndNode = ({ data }: RaidEndNodeProps) => {
  return (
    <>
      <BaseRaidNode node={data}>{data.id}</BaseRaidNode>

      <BaseRaidHandle node={data} type="target" />
    </>
  );
};
