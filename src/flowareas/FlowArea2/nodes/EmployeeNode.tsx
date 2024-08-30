import { type NodeProps } from "@xyflow/react";
import { type EmployeeNode } from "./types";

export function EmployeeNode({
	data,
}: NodeProps<EmployeeNode>) {

	return (
		<div>
			<div>{data.employee.firstName} {data.employee.lastName}</div>
		</div>
	);
}
