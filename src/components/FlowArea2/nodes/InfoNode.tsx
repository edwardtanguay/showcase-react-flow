import { Handle, type NodeProps, Position } from "@xyflow/react";
import { type InfoNode } from "./types";

export function InfoNode({
	positionAbsoluteX,
	positionAbsoluteY,
	data,
}: NodeProps<InfoNode>) {
	const x = `${Math.round(positionAbsoluteX)} px`;
	const y = `${Math.round(positionAbsoluteY)} px`;

	const hasHandle = data.hasHandle ? data.hasHandle : false;

	const getBgColor = (): string => {
		if (positionAbsoluteY >= 530) {
			return "tomato";
		} else {
			return data.bgcolor;
		}
	};

	return (
		<div
			style={{ backgroundColor: getBgColor() }}
			className="p-2 border border-green-700 flex justify-center flex-col shadow-2xl h-[4rem] w-[4rem]"
		>
			<div>{data.label && <div className="text-xs">{data.label}</div>}</div>

			{hasHandle && <Handle type="source" position={Position.Right} />}
		</div>
	);
}
