import { NodeTypes } from "@xyflow/react";
import { AppNode } from "./types";
import { InfoNode } from "./InfoNode";
import * as tools from "../../../tools";
import { EmployeeNode } from "./EmployeeNode";
import notes from "../data/notes.json";
import employees from "../data/employees.json";

const getInitialNodes = (): AppNode[] => {
	const nodes: AppNode[] = [];
	let index = 1;

	notes.forEach((_note) => {
		const x = 5 * tools.getRandomNumberBetween(5, 20);
		const y = 5 * tools.getRandomNumberBetween(5, 20);
		const rotate = `${tools.getRandomNumberBetween(-20, 20)}deg`;
		nodes.push({
			id: `${index + 1}`,
			data: { label: _note, rotate },
			type: "infoNode",
			position: { x, y },
			height: 100,
		});
		index++;
	});

	let count = 1;
	employees.forEach((_employee) => {
		const x = 350;
		const y = 10 + count * 20;
		nodes.push({
			id: `${index + 1}`,
			data: {
				employee: {
					firstName: _employee.firstName,
					lastName: _employee.lastName,
				},
			},
			type: "employeeNode",
			position: { x, y },
			height: 100,
		});
		index++;
		count++;
	});

	return nodes;
};

export const initialNodes: AppNode[] = getInitialNodes();

export const nodeTypes: NodeTypes = {
	infoNode: InfoNode,
	employeeNode: EmployeeNode,
};
