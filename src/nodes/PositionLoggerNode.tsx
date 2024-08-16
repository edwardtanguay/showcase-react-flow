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
		<div className="react-flow__node-default">
			{data.label && <div>Current Position:</div>}

			<div className="positionArea">
				<p>x = {x}</p>
				<p>y = {y}</p>
			</div>

			<Handle type="source" position={Position.Right} />
		</div>
	);
}
