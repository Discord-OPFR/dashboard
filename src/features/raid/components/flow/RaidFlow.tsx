import { Icon } from '@gatewatcher/skin';
import type { Connection, Edge, Node } from '@xyflow/react';
import { ControlButton } from '@xyflow/react';
import { Controls } from '@xyflow/react';
import {
  Background,
  BackgroundVariant,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesInitialized,
  useNodesState,
  useReactFlow,
} from '@xyflow/react';
import { useCallback, useEffect, useRef } from 'react';

import {
  EDGE_TYPES,
  NODE_TYPES,
} from '@/features/raid/components/flow/constants';
import {
  getMeasuredDimensions,
  transformRaidToFlow,
} from '@/features/raid/components/flow/utils';
import { useLocales } from '@/hooks/useLocales';
import type { RaidStructure } from '@/modules/raid/domain/raid.models';

import styles from './styles.module.scss';

type RaidFlowProps = {
  raid: RaidStructure;
};

export const RaidFlow = ({ raid }: RaidFlowProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const layoutedRef = useRef(false);

  const { t } = useLocales('raid', { keyPrefix: 'flow' });

  const nodesInitialized = useNodesInitialized();
  const { fitView, getNodes } = useReactFlow();

  const onConnect = useCallback(
    (params: Connection) => {
      const sourceNode = getNodes().find(n => n.id === params.source);
      const type = params.sourceHandle ?? sourceNode?.type;
      setEdges(eds => addEdge({ ...params, type }, eds));
    },
    [setEdges, getNodes],
  );

  const reLayoutGraph = useCallback(
    async (useMeasured = false) => {
      const dimensions = useMeasured
        ? getMeasuredDimensions(getNodes())
        : undefined;

      const { nodes, edges } = await transformRaidToFlow(raid, dimensions);
      setNodes(nodes);
      setEdges(edges);

      requestAnimationFrame(() => fitView({ padding: 0.2 }));
    },
    [raid, setEdges, setNodes, getNodes, fitView],
  );

  useEffect(() => {
    layoutedRef.current = false;
    reLayoutGraph(false);
  }, [raid, reLayoutGraph]);

  useEffect(() => {
    if (nodesInitialized && !layoutedRef.current && nodes.length > 0) {
      layoutedRef.current = true;
      reLayoutGraph(true);
    }
  }, [nodesInitialized, nodes.length, reLayoutGraph]);

  return (
    <div className={styles.FlowContainer}>
      <ReactFlow
        edges={edges}
        edgeTypes={EDGE_TYPES}
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.1}
        nodes={nodes}
        nodeTypes={NODE_TYPES}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        fitView
      >
        <Controls orientation="horizontal">
          <ControlButton
            aria-label={t('controls.refresh')}
            onClick={() => reLayoutGraph(true)}
            title={t('controls.refresh')}
          >
            <Icon name="Update" />
          </ControlButton>
        </Controls>
        <Background
          gap={120}
          id="1"
          offset={8}
          size={3}
          variant={BackgroundVariant.Dots}
        />
        <Background gap={12} id="2" size={1} variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
};
