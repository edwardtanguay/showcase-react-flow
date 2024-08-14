import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'todos' } },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -310, y:220 },
    data: { label: 'DRAG THIS' },
  },
  { id: 'c', position: { x: 100, y: 100 }, data: { label: 'image new websites' } },
  {
    id: 'd',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'with React Flow' },
  },
  { id: 'e', type: 'output', position: { x: -200, y: 140 }, data: { label: 'learn React Flow' } },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
