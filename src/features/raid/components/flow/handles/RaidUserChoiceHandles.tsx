import type { RaidNode } from '@/modules/raid/domain/raid.models';

import { BaseRaidHandle } from '../base/BaseRaidHandle';

type RaidUserChoiceHandlesProps = {
  node: RaidNode;
};

export const RaidUserChoiceHandles = ({ node }: RaidUserChoiceHandlesProps) => {
  return (
    <>
      <BaseRaidHandle node={node} type="target" />
      <BaseRaidHandle connectionLimit={1} node={node} type="source" />
    </>
  );
};
