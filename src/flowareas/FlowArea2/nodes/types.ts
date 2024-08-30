import type { Node } from "@xyflow/react";

type InfoNodeType = {
	label?: string;
	rotate: string;
};

export type InfoNode = Node<InfoNodeType, "infoNode">;
export type AppNode = InfoNode;
