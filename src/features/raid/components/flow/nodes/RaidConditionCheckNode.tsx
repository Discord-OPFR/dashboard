import type { NodeProps } from '@xyflow/react';

import { BaseRaidNode } from '../base/BaseRaidNode';
import { RaidConditionCheckHandles } from '../handles/RaidConditionCheckHandles';
import type { RaidConditionCheckNodeType } from '../types';

type RaidConditionCheckNodeProps = NodeProps<RaidConditionCheckNodeType>;

export const RaidConditionCheckNode = ({
  data,
}: RaidConditionCheckNodeProps) => {
  return (
    <>
      <BaseRaidNode node={data}>{data.id}</BaseRaidNode>

      <RaidConditionCheckHandles node={data} />
    </>
  );
};
