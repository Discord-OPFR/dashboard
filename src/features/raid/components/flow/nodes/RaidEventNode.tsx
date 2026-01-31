import type { NodeProps } from '@xyflow/react';

import { BaseRaidNode } from '../base/BaseRaidNode';
import { RaidEventHandles } from '../handles/RaidEventHandles';
import type { RaidEventNodeType } from '../types';

type RaidEventNodeProps = NodeProps<RaidEventNodeType>;

export const RaidEventNode = ({ data }: RaidEventNodeProps) => {
  return (
    <>
      <BaseRaidNode node={data}>{data.id}</BaseRaidNode>
      <RaidEventHandles node={data} />
    </>
  );
};
