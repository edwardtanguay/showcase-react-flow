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
import { initialNodes } from "./nodes";

const initialEdges: Edge[] = [
	{
		id: "2-3",
		source: "2",
		target: "3",
		style: { stroke: "black" },
		animated: true,
	},
];

export default function App() {
	const [nodes, , onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges , onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback((connection: Connection) => {
		const edge:Edge = {
			...connection,
			animated: false,
			id: `${edges.length} + 1`,
		};
		setEdges((prevEdges) => addEdge(edge, prevEdges));
	},[]);

	return (
		<ReactFlow
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
      onConnect={onConnect}
			fitView
		>
			<Background />
			<Controls />
		</ReactFlow>
	);
}