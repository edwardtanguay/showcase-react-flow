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
			className="p-2 rounFded border border-green-700 flex justify-center flex-col"
		>
			<div>{data.label && <div>{data.label}</div>}</div>

			<div className="positionArea flex justify-center">
				<div>
					<p>x = {x}</p>
					<p>y = {y}</p>
				</div>
			</div>
			{hasHandle && <Handle type="source" position={Position.Right} />}
		</div>
	);
}
