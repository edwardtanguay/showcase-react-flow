import { type NodeProps }  from "@xyflow/react";
import { type InfoNode } from "./types";

export function InfoNode({
	data,
}: NodeProps<InfoNode>) {
	return (
		<div
			className="p-2 border border-green-700 flex justify-center flex-col shadow-2xl h-[4rem] w-[4rem] bg-yellow-100"
		>
			<div>{ data.label && <div className="text-xs">{data.label}</div>}</div>
		</div>
	);
}
