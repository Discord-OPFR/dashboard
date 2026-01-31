import type { RaidNode } from '@/modules/raid/domain/raid.models';

import { BaseRaidHandle } from '../base/BaseRaidHandle';

type RaidEventHandlesProps = {
  node: RaidNode;
};

export const RaidEventHandles = ({ node }: RaidEventHandlesProps) => {
  return (
    <>
      <BaseRaidHandle node={node} type="target" />
      <BaseRaidHandle node={node} type="source" />
    </>
  );
};
