import { Edge, Node } from  "@xyflow/react";

export const intitialEdges: Edge[] = [];
export const intitialNodes: Node[] = [
	{
		id: '1',
		position: { x: 50, y: 100 },
		data: { amount: 10 },
		type: "paymentInit"
	}
];
