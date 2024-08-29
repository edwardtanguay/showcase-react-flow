import { NodeTypes } from "@xyflow/react";
import { AppNode } from "./types";
import { InfoNode } from "./InfoNode";

export const initialNodes: AppNode[] = [
	{
		id: "1",
		data: { label: "Info 001", bgcolor: "lemonchiffon" },
		type: "info-node",
		position: { x: 20, y: 20 },
		height: 100,
	},
	{
		id: "2",
		data: { label: "Info 002", bgcolor: "lemonchiffon" },
		type: "info-node",
		position: { x: 20, y: 100 },
		height: 100,
	},
];

export const nodeTypes = {
	"info-node": InfoNode,
} satisfies NodeTypes;
