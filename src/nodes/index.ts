import { Node, NodeTypes } from "@xyflow/react";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes: Node[] = [
	{
		id: "1",
		data: {
			label: "Information",
		},
		position: { x: 0, y: 0 },
		hidden: true,
	},
	{
		id: "2",
		data: {
			label: "Welcome",
		},
		position: { x: 100, y: 50 },
		selected: true,
	},
	{
		id: "3",
		data: {
			label: "Records",
		},
		position: { x: 260, y: 150 },
		width: 130,
		height: 130,
	},
	{
		id: "4",
		data: {
			label: "The Overview",
		},
		position: { x: 390, y: 350 },
		width: 130,
		height: 130,
	},
];


export const nodeTypes = {
	'position-logger': PositionLoggerNode
} satisfies NodeTypes;