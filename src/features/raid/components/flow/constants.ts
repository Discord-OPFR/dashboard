import type { EdgeTypes, NodeTypes } from '@xyflow/react';

import { BaseRaidEdge } from './base/BaseRaidEdge';
import { RaidEdgeFailure } from './edges/RaidEdgeFailure';
import { RaidEdgeSuccess } from './edges/RaidEdgeSuccess';
import { RaidConditionCheckNode } from './nodes/RaidConditionCheckNode';
import { RaidEndNode } from './nodes/RaidEndNode';
import { RaidEventNode } from './nodes/RaidEventNode';
import { RaidItemRequiredNode } from './nodes/RaidItemRequiredNode';
import { RaidUserChoiceNode } from './nodes/RaidUserChoiceNode';

export const NODE_TYPES: NodeTypes = {
  Event: RaidEventNode,
  ConditionCheck: RaidConditionCheckNode,
  End: RaidEndNode,
  UserChoice: RaidUserChoiceNode,
  ItemRequired: RaidItemRequiredNode,
};

export const EDGE_TYPES: EdgeTypes = {
  success: RaidEdgeSuccess,
  failure: RaidEdgeFailure,
  Event: BaseRaidEdge,
  ConditionCheck: BaseRaidEdge,
  End: BaseRaidEdge,
  UserChoice: BaseRaidEdge,
  ItemRequired: BaseRaidEdge,
};
