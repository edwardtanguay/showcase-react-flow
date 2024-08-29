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
import { FlowAreaWrapper } from "../FlowAreaWrapper";

export const FlowArea2 = () => {
	const [nodes, , onNodesChange] = useNodesState(initialNodes);
	const [edges] = useEdgesState(initialEdges);

	return (
		<section>
			<FlowAreaWrapper title="React Flow: Data-Loaded Nodes" subtitle="Custom node types InfoNode and EmployeeNode, both being loaded from JSON files.">
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
			</FlowAreaWrapper>
		</section>
	)
}