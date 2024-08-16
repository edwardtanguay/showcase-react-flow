import { Handle, type NodeProps, Position } from "@xyflow/react";
import { type PositionLoggerNode } from "./types";

export function PositionLoggerNode({
	positionAbsoluteX,
	positionAbsoluteY,
	data,
}: NodeProps<PositionLoggerNode>) {
	const x = `${Math.round(positionAbsoluteX)} px`;
	const y = `${Math.round(positionAbsoluteY)} px`;

	return (
		<div className="bg-green-300 p-2 rounded border border-green-700 flex justify-center flex-col">
			<div>{data.label && <div>{data.label}</div>}</div>

			<div className="positionArea flex justify-center">
				<div>
					<p>x = {x}</p>
					<p>y = {y}</p>
				</div>
			</div>

			<Handle type="source" position={Position.Right} />
		</div>
	);
}
