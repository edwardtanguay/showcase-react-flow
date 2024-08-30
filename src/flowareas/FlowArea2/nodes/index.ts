import { NodeTypes } from "@xyflow/react";
import { AppNode } from "./types";
import { InfoNode } from "./InfoNode";
import notes from "../data/notes.json";
import * as tools from "../../../tools";
import { EmployeeNode } from "./EmployeeNode";

const getInitialNodes = (): AppNode[] => {
	const nodes: AppNode[] = [];

	notes.forEach((note, index) => {
		const x = 5 * tools.getRandomNumberBetween(5, 20);
		const y = 5 * tools.getRandomNumberBetween(5, 20);
		const rotate = `${tools.getRandomNumberBetween(-20, 20)}deg`;
		nodes.push({
			id: `${index + 1}`,
			data: { label: note, rotate },
			type: "infoNode",
			position: { x, y },
			height: 100,
		});
	});

	return nodes;
};

export const initialNodes: AppNode[] = getInitialNodes();

export const nodeTypes: NodeTypes = {
	infoNode: InfoNode,
	employeeNode: EmployeeNode,
};
