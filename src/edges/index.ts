import { Edge } from "@xyflow/react";

export const initialEdges: Edge[] = [
	{
		id: "2-3",
		source: "2",
		target: "3",
		style: { stroke: "black" },
		animated: true,
	},
	{
		id: "records-overview",
		source: "3",
		target: "4",
		style: { stroke: "black" },
		animated: true,
	},
];
