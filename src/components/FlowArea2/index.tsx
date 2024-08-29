/* eslint-disable react-hooks/exhaustive-deps */
import {
	ReactFlow,
	Background,
	Controls,
	useNodesState,
	useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { initialNodes, nodeTypes } from "../FlowArea1/nodes";
import { initialEdges } from "../FlowArea1/edges";
import { DividerLine } from "../FlowArea1/DividerLine";

export const FlowArea2 = () => {
	const [nodes] = useNodesState(initialNodes);
	const [edges] = useEdgesState(initialEdges);

	return (
		<section>
			<h2>React Flow 2</h2>
			<div style={{ width: '40rem', height: '40rem', border: '1px solid black' }}>
				<ReactFlow
					className="bg-yellow-400 border-2 border-gray-500"
					nodes={nodes}
					nodeTypes={nodeTypes}
					edges={edges}
				>
					<Background />
					<Controls showInteractive={false} />
					<DividerLine />
				</ReactFlow>
			</div>
		</section>
	)
}