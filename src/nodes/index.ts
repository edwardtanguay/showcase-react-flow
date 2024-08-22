import { NodeTypes } from "@xyflow/react";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
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
	},
	{
		id: "3",
		data: {
			label: "The Records",
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
	{
		id: "5",
		data: { label: "Current Position", bgcolor: "lightgreen" },
		type: "position-logger",
		position: { x: 20, y: 140 },
		height: 100,
	},
	{
		id: "6",
		data: { label: "Has handle", bgcolor: "lightblue", hasHandle: true },
		type: "position-logger",
		position: { x: 20, y: 240 },
		height: 100,
	},
	{
		id: "7",
		data: { label: "No handle", bgcolor: "beige", hasHandle: false },
		type: "position-logger",
		position: { x: 60, y: 540 },
		height: 100,
	},
];

export const nodeTypes = {
	"position-logger": PositionLoggerNode,
} satisfies NodeTypes;
