import { BaseEdge, type EdgeProps, getSmoothStepPath } from '@xyflow/react';

type BaseRaidEdgeProps = EdgeProps & {
  className?: string;
};

export const BaseRaidEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  ...props
}: BaseRaidEdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return <BaseEdge {...props} path={edgePath} />;
};
