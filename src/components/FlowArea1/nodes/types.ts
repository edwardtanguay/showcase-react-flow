import type { Node, BuiltInNode } from "@xyflow/react";

export type PositionLoggerNode = Node<{ label: string, bgcolor: string, hasHandle?: boolean }, 'position-logger'>;
export type AppNode = BuiltInNode | PositionLoggerNode;