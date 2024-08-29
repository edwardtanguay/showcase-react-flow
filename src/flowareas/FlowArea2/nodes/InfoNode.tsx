import { type NodeProps } from "@xyflow/react";
import { type InfoNode } from "./types";

export function InfoNode({
	data,
}: NodeProps<InfoNode>) {

	const textColor = !data.label ? '#ccc' : '#000';
	const label = !data.label ? 'no text' : data.label;
	return (
		<div
			style={{ boxShadow: "3px 3px 5px 0px #555", transform: `rotate(${data})` }}
			className="p-2 border border-gray-400 flex justify-center items-center shadow-2xl h-[4rem] w-[4rem] bg-yellow-100"
		>
			<div className="text-xs" style={{ color: textColor }}>{label}</div>
		</div>
	);
}
