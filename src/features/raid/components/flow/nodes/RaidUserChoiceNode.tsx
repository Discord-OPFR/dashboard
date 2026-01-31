import type { NodeProps } from '@xyflow/react';

import { BaseRaidNode } from '../base/BaseRaidNode';
import { RaidUserChoiceHandles } from '../handles/RaidUserChoiceHandles';
import type { RaidUserChoiceNodeType } from '../types';

type RaidUserChoiceNodeProps = NodeProps<RaidUserChoiceNodeType>;

export const RaidUserChoiceNode = ({ data }: RaidUserChoiceNodeProps) => {
  return (
    <>
      <BaseRaidNode node={data}>{data.id}</BaseRaidNode>
      <RaidUserChoiceHandles node={data} />
    </>
  );
};
