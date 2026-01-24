import type { Edge, Node } from '@xyflow/react';
import ELK from 'elkjs/lib/elk.bundled.js';

import type {
  RaidNode,
  RaidStructure,
} from '@/modules/raid/domain/raid.models';
import type { FlowSettings } from '@/modules/settings/domain/settings.model';

import type {
  RaidConditionCheckNodeType,
  RaidEndNodeType,
  RaidEventNodeType,
  RaidGotoNodeType,
  RaidItemRequiredNodeType,
  RaidUserChoiceNodeType,
} from './types';

type FlowNode =
  | RaidEventNodeType
  | RaidUserChoiceNodeType
  | RaidConditionCheckNodeType
  | RaidEndNodeType
  | RaidGotoNodeType
  | RaidItemRequiredNodeType;

const DEFAULT_NODE_WIDTH = 100;
const DEFAULT_NODE_HEIGHT = 100;

type NodeDimensions = Record<string, { width: number; height: number }>;

const elk = new ELK();

const createNode = (node: RaidNode): FlowNode => {
  return {
    id: node.id,
    type: node.type,
    position: { x: 0, y: 0 },
    data: node,
  } as FlowNode;
};

const createEdgesForNode = (node: RaidNode): Edge[] => {
  const edges: Edge[] = [];
  const defaultParams = { source: node.id, type: node.type };

  switch (node.type) {
    case 'Event': {
      node.outputs.forEach((outputId, idx) => {
        edges.push({
          ...defaultParams,
          id: `${node.id}-${outputId}-${idx}`,
          target: outputId,
        });
      });
      break;
    }
    case 'UserChoice': {
      edges.push({
        ...defaultParams,
        id: `${node.id}-${node.output}`,
        target: node.output,
      });
      break;
    }
    case 'ConditionCheck': {
      edges.push({
        ...defaultParams,
        id: `${node.id}-success-${node.success}`,
        sourceHandle: 'success',
        target: node.success,
        type: 'success',
      });
      edges.push({
        ...defaultParams,
        id: `${node.id}-failure-${node.failure}`,
        sourceHandle: 'failure',
        target: node.failure,
        type: 'failure',
      });
      break;
    }
    case 'ItemRequired': {
      edges.push({
        ...defaultParams,
        id: `${node.id}-${node.output}`,
        target: node.output,
      });
      break;
    }
    case 'Goto': {
      edges.push({
        ...defaultParams,
        id: `${node.id}-${node.goto}`,
        target: node.goto,
      });
      break;
    }
    case 'End':
      break;
  }

  return edges;
};

const getNodePorts = (node: FlowNode) => {
  const ports = [];

  ports.push({
    id: `${node.id}-target`,
    properties: {
      'port.side': 'WEST',
      'port.index': '0',
    },
  });

  if (node.type === 'ConditionCheck') {
    ports.push({
      id: `${node.id}-success`,
      properties: {
        'port.side': 'EAST',
        'port.index': '0',
      },
    });
    ports.push({
      id: `${node.id}-failure`,
      properties: {
        'port.side': 'EAST',
        'port.index': '1',
      },
    });
  } else if (node.type !== 'End') {
    ports.push({
      id: `${node.id}-source`,
      properties: {
        'port.side': 'EAST',
        'port.index': '0',
      },
    });
  }

  return ports;
};

const applyElkLayout = async (
  nodes: FlowNode[],
  edges: Edge[],
  options: FlowSettings,
  dimensions?: NodeDimensions,
): Promise<FlowNode[]> => {
  const graph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'RIGHT',
      'elk.alignment': 'CENTER',
      'elk.spacing.nodeNode': '100',
      'elk.spacing.edgeNode': '40',
      'elk.layered.spacing.nodeNodeBetweenLayers': '100',
      'elk.layered.spacing.edgeNodeBetweenLayers': '40',
      'elk.portConstraints': 'FIXED_ORDER',
      'elk.layered.crossingMinimization.strategy':
        options.crossingMinimizationStrategy,
      'elk.layered.nodePlacement.strategy': options.nodePlacementStrategy,
    },
    children: nodes.map(node => {
      const { width, height } = dimensions?.[node.id] ?? {
        width: DEFAULT_NODE_WIDTH,
        height: DEFAULT_NODE_HEIGHT,
      };
      return {
        id: node.id,
        width,
        height,
        ports: getNodePorts(node),
        properties: {
          portConstraints: 'FIXED_ORDER',
        },
      };
    }),
    edges: edges.map(edge => ({
      id: edge.id,
      sources: [
        edge.sourceHandle
          ? `${edge.source}-${edge.sourceHandle}`
          : `${edge.source}-source`,
      ],
      targets: [`${edge.target}-target`],
    })),
  };

  const layoutedGraph = await elk.layout(graph);

  return nodes.map(node => {
    const elkNode = layoutedGraph.children?.find(n => n.id === node.id);

    return {
      ...node,
      position: {
        x: elkNode?.x ?? 0,
        y: elkNode?.y ?? 0,
      },
    };
  });
};

export const transformRaidToFlow = async (
  raid: RaidStructure,
  options: FlowSettings,
  dimensions?: NodeDimensions,
): Promise<{ nodes: FlowNode[]; edges: Edge[] }> => {
  const nodes = raid.nodes.map(node => createNode(node));
  const edges = raid.nodes.flatMap(node => createEdgesForNode(node));
  const layoutedNodes = await applyElkLayout(nodes, edges, options, dimensions);

  const styledEdges = edges.map(edge => ({
    ...edge,
    type: edge.type ?? 'smoothstep',
  }));

  return { nodes: layoutedNodes, edges: styledEdges };
};

export const getMeasuredDimensions = (
  nodes: Node[],
): NodeDimensions | undefined => {
  const allMeasured = nodes.every(
    node => node.measured?.width && node.measured?.height,
  );

  if (!allMeasured) return undefined;

  return nodes.reduce<NodeDimensions>((acc, node) => {
    acc[node.id] = {
      width: node.measured?.width ?? DEFAULT_NODE_WIDTH,
      height: node.measured?.height ?? DEFAULT_NODE_HEIGHT,
    };
    return acc;
  }, {});
};
