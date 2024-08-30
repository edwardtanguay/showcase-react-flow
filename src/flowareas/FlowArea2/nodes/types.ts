import type { Node } from "@xyflow/react";

type InfoNodeType = {
	label?: string;
	rotate: string;
};

type Employee = {
	id: number;
	firstName: string;
	lastName: string;
}

type EmployeeNodeType = {
	employee: Employee
}

export type InfoNode = Node<InfoNodeType, "infoNode">;
export type EmployeeNode = Node<EmployeeNodeType, "employeeNode">;
export type AppNode = InfoNode | EmployeeNode;
