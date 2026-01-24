import type {
  Buff,
  Characteristic,
  CharacteristicsRecord,
  RaidType,
} from '@opfr/definitions';

export type RaidConditionRequirements = {
  conditions: string[];
  mode: 'include' | 'exclude';
};

export type RaidRewards = Partial<{
  title: string;
  condition: string;
  xp: number;
  berry: number;
  hp: number;
  items: Record<string, number>;
}>;

export type RaidPenalties = Partial<{
  buffs: Buff[];
  hp: number;
  xp: number;
  berry: number;
  time_out: number;
  items: Record<string, number>;
}>;

export type RaidRequirements =
  | Partial<CharacteristicsRecord>
  | { sum: number; characteristics: Characteristic[] }
  | RaidConditionRequirements;

export type RaidItemRequirements = { items: Record<string, number> };

export type RaidNodeId = {
  UserChoice: `uc_${string}`;
  Event: `ev_${string}`;
  End: `end_${string}`;
  ConditionCheck: `c_${string}`;
  ItemRequired: `rq_${string}`;
  Goto: `goto_${string}`;
};

export type RaidNodeType = keyof RaidNodeId;

export type RaidGoto = {
  id: RaidNodeId['Goto'];
  type: RaidNodeType & 'Goto';
  goto: RaidNodeId[RaidNodeType];
};

export type RaidUserChoice = {
  id: RaidNodeId['UserChoice'];
  type: RaidNodeType & 'UserChoice';
  output: RaidConditionCheck['id'] | RaidEvent['id'] | RaidEnd['id'];
};

export type RaidItemRequired = {
  id: RaidNodeId['ItemRequired'];
  type: RaidNodeType & 'ItemRequired';
  requirements: RaidItemRequirements;
  output: RaidConditionCheck['id'] | RaidEvent['id'] | RaidEnd['id'];
  doNotConsume: boolean;
};

export type RaidEvent = {
  id: RaidNodeId['Event'];
  type: RaidNodeType & 'Event';
  rewards?: RaidRewards;
  penalties?: RaidPenalties;
  outputs: (RaidUserChoice['id'] | RaidItemRequired['id'] | RaidGoto['id'])[];
};

export type RaidEnd = {
  id: RaidNodeId['End'];
  type: RaidNodeType & 'End';
  rewards?: RaidRewards;
  penalties?: RaidPenalties;
};

export type RaidConditionCheck = {
  id: RaidNodeId['ConditionCheck'];
  type: RaidNodeType & 'ConditionCheck';
  requirements: RaidRequirements;
  success: RaidEvent['id'] | RaidEnd['id'];
  failure: RaidEvent['id'] | RaidEnd['id'];
};

export type RaidNode =
  | RaidItemRequired
  | RaidEnd
  | RaidEvent
  | RaidUserChoice
  | RaidConditionCheck
  | RaidGoto;

export type RaidStructure = {
  id: string;
  cooldown: number;
  type: RaidType;
  startId: RaidEvent['id'];
  nodes: RaidNode[];
};
