import type { NodeProps } from '@xyflow/react';

import { BaseRaidNode } from '../base/BaseRaidNode';
import { RaidEventHandles } from '../handles/RaidEventHandles';
import type { RaidGotoNodeType } from '../types';

type RaidGotoNodeProps = NodeProps<RaidGotoNodeType>;

export const RaidGotoNode = ({ data }: RaidGotoNodeProps) => {
  return (
    <>
      <BaseRaidNode node={data}>{data.id}</BaseRaidNode>
      <RaidEventHandles node={data} />
    </>
  );
};
