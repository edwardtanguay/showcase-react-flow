import type { Node, BuiltInNode } from "@xyflow/react";

export type InfoNode = Node<{ label: string }, 'info-node'>;
export type AppNode = BuiltInNode | InfoNode;