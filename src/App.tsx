import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function App() {

  const nodes: Node[] = [];

  return (
    <ReactFlow nodes={nodes} />
  );
}
