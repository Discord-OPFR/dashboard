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
  className,
}: BaseRaidEdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return <BaseEdge className={className} path={edgePath} />;
};
