export const NODE_PLACEMENT_STRATEGIES = [
  'SIMPLE',
  'INTERACTIVE',
  'LINEAR_SEGMENTS',
  'BRANDES_KOEPF',
  'NETWORK_SIMPLEX',
] as const;

export const CROSSING_MINIMIZATION_STRATEGIES = [
  'LAYER_SWEEP',
  'MEDIAN_LAYER_SWEEP',
  'INTERACTIVE',
  'NONE',
] as const;

export type CrossingMinimizationStrategy =
  (typeof CROSSING_MINIMIZATION_STRATEGIES)[number];
export type NodePlacementStrategy = (typeof NODE_PLACEMENT_STRATEGIES)[number];

export type FlowSettings = {
  crossingMinimizationStrategy: CrossingMinimizationStrategy;
  nodePlacementStrategy: NodePlacementStrategy;
};
