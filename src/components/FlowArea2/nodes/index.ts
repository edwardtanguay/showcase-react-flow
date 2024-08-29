import { NodeTypes } from "@xyflow/react";
import { AppNode } from "./types";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes: AppNode[] = [
	{
		id: "1",
		data: { label: "Note 001", bgcolor: "lemonchiffon" },
		type: "position-logger",
		position: { x: 20, y: 140 },
		height: 100,
	},
];

export const nodeTypes = {
	"position-logger": PositionLoggerNode,
} satisfies NodeTypes;
