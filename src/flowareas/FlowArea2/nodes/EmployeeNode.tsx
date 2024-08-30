import { type NodeProps } from "@xyflow/react";
import { type EmployeeNode } from "./types";

export function EmployeeNode({
	data,
}: NodeProps<EmployeeNode>) {

	return (
		<div className="bg-slate-200 pt-3 pl-3 pr-3 pb-1 border border-slate-400 rounded">
			<img className="w-[10rem] h-[10rem]" src={`images/employees/employee_${data.employee.id}.jpg`}/>
			<div>{data.employee.firstName} {data.employee.lastName}</div>
		</div>
	);
}
