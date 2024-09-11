import type { Node } from "@xyflow/react";

type MessageNodeType = {
	label?: string;
	rotate: string;
};

type Employee = {
	id: number;
	firstName: string;
	lastName: string;
};

type EmployeeNodeType = {
	employee: Employee;
};

export type MessageNode = Node<MessageNodeType, "messageNode">;
export type EmployeeNode = Node<EmployeeNodeType, "employeeNode">;
export type AppNode = MessageNode | EmployeeNode;
