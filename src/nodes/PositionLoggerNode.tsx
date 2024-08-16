import { Handle, type NodeProps, Position } from "@xyflow/react";
import { type PositionLoggerNode } from "./types";

export function PositionLoggerNode({
	positionAbsoluteX,
	positionAbsoluteY,
	data
}: NodeProps<PositionLoggerNode>) {
	const x = `${positionAbsoluteX}`;
	const y = `${positionAbsoluteY}`;

	return (
		<div className="react-flow__node-default">
			{data.label && <div>[{data.label}]</div>}

			<div>
				POS: {x} x {y}
			</div>

			<Handle type="source" position={Position.Right}/>
		</div>
	)
}