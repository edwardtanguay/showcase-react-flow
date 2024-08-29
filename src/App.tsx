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
import { DividerLine } from "./components/DividerLine";

export default function App() {
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
		<>
			<header className=" bg-gray-600 px-2 pb-4 text-center text-gray-300 mb-6">
				<h1 className="m-0 p-0 text-[1rem] md:text-[1.6rem]" >React Flow Showcase</h1>
				<div className="text-[.6rem] md:text-[1.2rem]">
					<p className="text-center">
						Notes:{' '}
						<a
							className="underline"
							target="_blank"
							href="https://tanguay-eu.vercel.app/forays/320"
						>https://tanguay-eu.vercel.app/forays/320</a
						>
					</p>
					<p className="text-center">
						Repository:{' '}
						<a
							className="underline"
							target="_blank"
							href="https://github.com/edwardtanguay/showcase-react-flow"
						>https://github.com/edwardtanguay/showcase-react-flow</a
						>
					</p>
				</div>
				<div className="block md:hidden -mb-1 mt-3 bg-gray-800 text-yellow-200 italic">
					This site not yet optimized for mobile view.
				</div>
			</header>
			<div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '1rem', width: '100%', height: '80rem' }}>
				<section>
					<h2>React Flow 1</h2>
					<div style={{ width: '40rem', height: '40rem', border: '1px solid black' }}>
						<ReactFlow
							className="bg-yellow-500 border-2 border-gray-500"
							nodes={nodes}
							nodeTypes={nodeTypes}
							edges={edges}
							onNodesChange={onNodesChange}
							onEdgesChange={onEdgesChange}
							onConnect={onConnect}
						>
							<Background />
							<Controls />
							<DividerLine />
						</ReactFlow>
					</div>
				</section>
				<section>
					<h2>React Flow 2</h2>
					<div style={{ width: '40rem', height: '40rem', border: '1px solid black' }}>
						<ReactFlow
							className="bg-red-500 border-2 border-gray-500"
							nodes={nodes}
							nodeTypes={nodeTypes}
							edges={edges}
							onNodesChange={onNodesChange}
							onEdgesChange={onEdgesChange}
							onConnect={onConnect}
						>
							<Background />
							<Controls />
							<DividerLine />
						</ReactFlow>
					</div>
				</section>
			</div>
		</>
	);
}
