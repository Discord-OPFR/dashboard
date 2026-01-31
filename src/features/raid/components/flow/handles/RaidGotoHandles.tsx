import type { RaidNode } from '@/modules/raid/domain/raid.models';

import { BaseRaidHandle } from '../base/BaseRaidHandle';

type RaidGotoHandlesProps = {
  node: RaidNode;
};

export const RaidGotoHandles = ({ node }: RaidGotoHandlesProps) => {
  return (
    <>
      <BaseRaidHandle node={node} type="target" />
      <BaseRaidHandle connectionLimit={1} node={node} type="source" />
    </>
  );
};
