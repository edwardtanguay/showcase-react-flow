import { type NodeProps } from "@xyflow/react";
import { type InfoNode } from "./types";

export function InfoNode({
	data,
}: NodeProps<InfoNode>) {

	data.label = !data.label ? 'INFO' : data.label;
	return (
		<div
			className="p-2 border border-green-700 flex justify-center items-center shadow-2xl h-[4rem] w-[4rem] bg-yellow-100"
		>
			<div className="text-xs">{data.label}</div>
		</div>
	);
}
