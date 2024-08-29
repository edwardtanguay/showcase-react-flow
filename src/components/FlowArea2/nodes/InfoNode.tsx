import { type NodeProps } from "@xyflow/react";
import { type InfoNode } from "./types";

export function InfoNode({
	data,
}: NodeProps<InfoNode>) {

	const textColor = !data.label ? '#ccc' : '#000';
	const label = !data.label ? 'no text' : data.label;
	return (
		<div
		style={{boxShadow: "1px 1px 10px 1px #555"}}
			className="p-2 border border-gray-400 flex justify-center items-center shadow-2xl h-[4rem] w-[4rem] bg-yellow-100"
		>
			<div className="text-xs" style={{color: textColor}}>{label}</div>
		</div>
	);
}
