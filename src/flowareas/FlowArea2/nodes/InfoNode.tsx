import { type NodeProps } from "@xyflow/react";
import { type InfoNode } from "./types";

export function InfoNode({
	data,
}: NodeProps<InfoNode>) {

	const textColor = !data.label ? '#ccc' : '#000';
	const label = !data.label ? 'no text' : data.label;
	return (
		<div
			style={{ boxShadow: "3px 3px 5px 0px #555", transform: `rotate(${data.rotate})` }}
			className="p-1 border border-gray-400 shadow-2xl h-[8rem] w-[8rem] bg-yellow-100"
		>
			<div className="text-[.8rem]" style={{ color: textColor }}>{label}</div>
		</div>
	);
}
