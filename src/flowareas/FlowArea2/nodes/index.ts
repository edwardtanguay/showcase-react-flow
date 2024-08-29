import { NodeTypes } from "@xyflow/react";
import { AppNode } from "./types";
import { InfoNode } from "./InfoNode";
import notes from "../data/notes.json";
import * as tools from "../../../tools";

export const initialNodes: AppNode[] = notes.map((note, index) => {
	const x = 5 * tools.getRandomNumberBetween(5, 20);
	const y = 5 * tools.getRandomNumberBetween(5, 20);
	const rotate = `${tools.getRandomNumberBetween(-20, 20)}deg`;
	return {
		id: `${index + 1}`,
		data: { label: note, rotate },
		type: "info-node",
		position: { x, y },
		height: 100,
	};
});

export const nodeTypes = {
	"info-node": InfoNode,
} satisfies NodeTypes;
