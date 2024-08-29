import { NodeTypes } from "@xyflow/react";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
	{
		id: "1",
		data: {
			label: "Static Info",
		},
		position: { x: 30, y: 30 },
		hidden: false,
	},
];

export const nodeTypes = {} satisfies NodeTypes;
