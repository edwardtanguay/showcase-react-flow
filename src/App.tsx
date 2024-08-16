/* eslint-disable react-hooks/exhaustive-deps */
import {
	ReactFlow,
	Node,
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

const initialNodes: Node[] = [
	{
		id: "1",
		data: {
			label: "Information",
		},
		position: { x: 0, y: 0 },
		hidden: true,
	},
	{
		id: "2",
		data: {
			label: "Welcome",
		},
		position: { x: 100, y: 50 },
		selected: true,
	},
	{
		id: "3",
		data: {
			label: "Records",
		},
		position: { x: 260, y: 150 },
		width: 130,
		height: 130,
	},
	{
		id: "4",
		data: {
			label: "Overview",
		},
		position: { x: 390, y: 350 },
		width: 130,
		height: 130,
	},
];

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
		const edge = {
			...connection,
			animated: true,
			id: `${edges.length} + 1`,
		};
    const _edges = addEdge(edge, edges)
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
