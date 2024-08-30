import type { Node, BuiltInNode } from "@xyflow/react";

type InfoNodeType = {
	label?: string;
	rotate: string;
};

export type InfoNode = Node<InfoNodeType, "infoNode">;
export type AppNode = BuiltInNode | InfoNode;