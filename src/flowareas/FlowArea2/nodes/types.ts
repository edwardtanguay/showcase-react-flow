import type { Node, BuiltInNode } from "@xyflow/react";

type InfoNodeType = {
	label?: string
}

export type InfoNode = Node<InfoNodeType, 'info-node'>;
export type AppNode = BuiltInNode | InfoNode;