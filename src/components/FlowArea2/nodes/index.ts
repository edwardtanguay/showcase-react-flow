import { NodeTypes } from "@xyflow/react";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
	{
		id: "1",
		data: {
			label: "Single",
		},
		position: { x: 0, y: 0 },
		hidden: true,
	},
];

export const nodeTypes = {} satisfies NodeTypes;
