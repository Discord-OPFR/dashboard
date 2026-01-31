import type { EdgeTypes, NodeTypes } from '@xyflow/react';

import { RaidBasicEdge } from './edges/RaidBasicEdge';
import { RaidEdgeFailure } from './edges/RaidEdgeFailure';
import { RaidEdgeSuccess } from './edges/RaidEdgeSuccess';
import { RaidConditionCheckNode } from './nodes/RaidConditionCheckNode';
import { RaidEndNode } from './nodes/RaidEndNode';
import { RaidEventNode } from './nodes/RaidEventNode';
import { RaidGotoNode } from './nodes/RaidGotoNode';
import { RaidItemRequiredNode } from './nodes/RaidItemRequiredNode';
import { RaidUserChoiceNode } from './nodes/RaidUserChoiceNode';

export const NODE_TYPES: NodeTypes = {
  Event: RaidEventNode,
  Goto: RaidGotoNode,
  ConditionCheck: RaidConditionCheckNode,
  End: RaidEndNode,
  UserChoice: RaidUserChoiceNode,
  ItemRequired: RaidItemRequiredNode,
};

export const EDGE_TYPES: EdgeTypes = {
  success: RaidEdgeSuccess,
  failure: RaidEdgeFailure,
  Event: RaidBasicEdge,
  ConditionCheck: RaidBasicEdge,
  End: RaidBasicEdge,
  UserChoice: RaidBasicEdge,
  ItemRequired: RaidBasicEdge,
  Goto: RaidBasicEdge,
};
