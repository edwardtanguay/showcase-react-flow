import { ReactFlow, Node, Edge, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function App() {
	const nodes: Node[] = [
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
			selected: false,
			selectable: true,
			draggable: false,
			resizing: true,
			width: 130,
			height: 130,
		},
		{
			id: "4",
			data: {
				label: "Overview",
			},
			position: { x: 390, y: 350 },
			selected: false,
			selectable: true,
			draggable: false,
			resizing: true,
			width: 130,
			height: 130,
		},
	];

	const edges: Edge[] = [
		{
			id: "2-3",
			source: "2",
			target: "3",
			style: { stroke: "black" },
			animated: true,
		},
		{
			id: "3-4",
			source: "3",
			target: "4",
			style: { stroke: "black" },
		},
	];

	return (
		<ReactFlow nodes={nodes} edges={edges} fitView>
      <Background />
      <Controls/>
		</ReactFlow>
	);
}
