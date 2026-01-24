import type { Node } from '@xyflow/react';

import type {
  RaidConditionCheck,
  RaidEnd,
  RaidEvent,
  RaidGoto,
  RaidItemRequired,
  RaidUserChoice,
} from '@/modules/raid/domain/raid.models';

export type RaidGotoNodeType = Node<RaidGoto, 'Goto'>;
export type RaidEventNodeType = Node<RaidEvent, 'Event'>;
export type RaidUserChoiceNodeType = Node<RaidUserChoice, 'UserChoice'>;
export type RaidItemRequiredNodeType = Node<RaidItemRequired, 'ItemRequired'>;
export type RaidConditionCheckNodeType = Node<
  RaidConditionCheck,
  'ConditionCheck'
>;
export type RaidEndNodeType = Node<RaidEnd, 'End'>;
