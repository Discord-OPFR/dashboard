import type { RaidNode } from '@/modules/raid/domain/raid.models';

import { BaseRaidHandle } from '../base/BaseRaidHandle';

type RaidItemRequiredHandlesProps = {
  node: RaidNode;
};

export const RaidItemRequiredHandles = ({
  node,
}: RaidItemRequiredHandlesProps) => {
  return (
    <>
      <BaseRaidHandle node={node} type="target" />
      <BaseRaidHandle connectionLimit={1} node={node} type="source" />
    </>
  );
};
