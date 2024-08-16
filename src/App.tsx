import { ReactFlow, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function App() {

  const nodes: Node[] = [{
    id: '1',
    data: {
      label: 'Information'
    },
    position: { x: 0, y: 0 }
  }];

  return (
    <ReactFlow nodes={nodes} />
  );
}
