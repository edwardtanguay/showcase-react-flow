/* eslint-disable react-hooks/exhaustive-deps */
import {
	ReactFlow,
	Background,
	Controls,
	useNodesState,
	useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges } from "./edges";

export const FlowArea2 = () => {
	const [nodes,,onNodesChange] = useNodesState(initialNodes);
	const [edges] = useEdgesState(initialEdges);

	return (
		<section>
			<h2 className="text-xl">React Flow: Data-Loaded Nodes</h2>
			<p className="italic -mt-1 mb-1 text-sm">InfoNode as simple custom node, Employee Nodes loaded from JSON file</p>
			<div style={{ width: '40rem', height: '40rem', border: '1px solid black' }}>
				<ReactFlow
					className="bg-yellow-400 border-2 border-gray-500"
					nodes={nodes}
					nodeTypes={nodeTypes}
					onNodesChange={onNodesChange}
					edges={edges}
				>
					<Background />
					<Controls showInteractive={false} />
				</ReactFlow>
			</div>
		</section>
	)
}