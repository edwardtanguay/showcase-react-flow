/* eslint-disable react-hooks/exhaustive-deps */
import {
	ReactFlow,
	Edge,
	Background,
	Controls,
	useNodesState,
	useEdgesState,
	addEdge,
	Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback } from "react";
import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges } from "./edges";

export default function App() {
	const [nodes, , onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback((connection: Connection) => {
		const edge: Edge = {
			...connection,
			animated: false,
			id: `${edges.length} + 1`,
			label: "added"
		};
		setEdges((prevEdges) => addEdge(edge, prevEdges));
	}, []);

	return (
		<>
			<ReactFlow
				className="border-2 border-gray-500"
				nodes={nodes}
				nodeTypes={nodeTypes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			>
				<Background />
				<Controls />
			</ReactFlow>
		</>
	);
}
