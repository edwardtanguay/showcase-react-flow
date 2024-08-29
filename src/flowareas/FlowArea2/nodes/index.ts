import { NodeTypes } from "@xyflow/react";
import { AppNode } from "./types";
import { InfoNode } from "./InfoNode";
import notes from "../data/notes.json";
import * as tools from '../../../tools';

export const initialNodes: AppNode[] = notes.map((note, index) => {
	const x = 20 + (index * tools.getRandomNumberBetween(5,10));
	const y = 20 + index * tools.getRandomNumberBetween(15, 30);
	// const rotate = 20;
	return {
		id: `${index + 1}`,
		data: { label: note, rotate: '25deg' },
		type: "info-node",
		position: { x, y },
		height: 100,
	};
});

// export const initialNodes: AppNode[] = [
// 	{
// 		id: "1",
// 		data: { label: "Info 001" },
// 		type: "info-node",
// 		position: { x: 20, y: 20 },
// 		height: 100,
// 	},
// 	{
// 		id: "2",
// 		data: {},
// 		type: "info-node",
// 		position: { x: 20, y: 100 },
// 		height: 100,
// 	},
// 	{
// 		id: "3",
// 		data: { label: "Info 002" },
// 		type: "info-node",
// 		position: { x: 20, y: 180 },
// 		height: 100,
// 	},
// ];

export const nodeTypes = {
	"info-node": InfoNode,
} satisfies NodeTypes;
