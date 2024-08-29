import type { Node, BuiltInNode } from "@xyflow/react";

export type InfoNode = Node<{ label: string, bgcolor: string, hasHandle?: boolean }, 'info-node'>;
export type AppNode = BuiltInNode | InfoNode;