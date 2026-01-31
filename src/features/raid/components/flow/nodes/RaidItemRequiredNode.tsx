import type { NodeProps } from '@xyflow/react';

import { BaseRaidNode } from '../base/BaseRaidNode';
import { RaidItemRequiredHandles } from '../handles/RaidItemRequiredHandles';
import type { RaidItemRequiredNodeType } from '../types';

type RaidItemRequiredNodeProps = NodeProps<RaidItemRequiredNodeType>;

export const RaidItemRequiredNode = ({ data }: RaidItemRequiredNodeProps) => {
  return (
    <>
      <BaseRaidNode node={data}>{data.id}</BaseRaidNode>
      <RaidItemRequiredHandles node={data} />
    </>
  );
};
