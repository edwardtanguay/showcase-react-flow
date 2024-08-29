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
import { DividerLine } from "./DividerLine";
import { FlowAreaWrapper } from "../FlowAreaWrapper";

export const FlowArea1 = () => {
	const [nodes, , onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback((connection: Connection) => {
		const edge: Edge = {
			...connection,
			animated: false,
			id: `${edges.length} + 1`,
			label: "added",
			style: {
				stroke: "#222",
			},
			labelStyle: {
				fill: "yellow",
			},
			labelBgStyle: {
				fill: "black",
			},
		};
		setEdges((prevEdges) => addEdge(edge, prevEdges));
	}, []);
	return (
		<FlowAreaWrapper title="React Flow: Basics" subtitle="Normal nodes, custom nodes that are interactive (drag below line, they turn red)">
			<ReactFlow
				className="bg-yellow-200 border-2 border-gray-500"
				nodes={nodes}
				nodeTypes={nodeTypes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			>
				<Background />
				<Controls showInteractive={false} />
				<DividerLine />
			</ReactFlow>
		</FlowAreaWrapper>
	)
}