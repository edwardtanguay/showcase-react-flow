import { NodeTypes } from "@xyflow/react";
import { AppNode } from "./types";
import { InfoNode } from "./InfoNode";
import notes from "../data/notes.json";
import * as tools from '../../../tools';

export const initialNodes: AppNode[] = notes.map((note, index) => {
	const x = 20 + (index * tools.getRandomNumberBetween(5,10));
	const y = 20 + index * tools.getRandomNumberBetween(15, 30);
	return {
		id: `${index + 1}`,
		data: { label: note, rotate: '28deg' },
		type: "info-node",
		position: { x, y },
		height: 100,
	};
});

export const nodeTypes = {
	"info-node": InfoNode,
} satisfies NodeTypes;
