import React, {
  useState,
  useRef
} from "react"

import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  Background,
  ReactFlowProvider,
} from 'react-flow-renderer';

import Sidebar from './Sidebar';

import initialElements from './initialElements';

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function Diagram() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);

  const onRemove = (elsRemove) => {
    setElements((els) => removeElements(elsRemove, els));
  };

  const onConnect = (params) => {
    setElements((els) => addEdge(params, els));
  };

   const onLoad = (_reactFlowInstance) => {
    setReactFlowInstance(_reactFlowInstance);
    // _reactFlowInstance.fitView();
    _reactFlowInstance.zoomTo(1);
    // _reactFlowInstance.zoomOut();
    // _reactFlowInstance.setCenter(100,300);
    console.log(_reactFlowInstance);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const label = event.dataTransfer.getData('flow-label');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label },
    };

    setElements((es) => es.concat(newNode));
  };

  const onMoveEndHandler = (flowTransform) => {
    console.log(flowTransform);
  };

  return (
    <div className="Diagram">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onElementsRemove={onRemove}
            onConnect={onConnect}
            deleteKeyCode={8}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onMoveEnd={onMoveEndHandler}
            defaultZoom={1}
            defaultPosition={[263,87]}>

            <Controls />

            <Background color="#eee" gap={16} />

          </ReactFlow>
        </div>
        <Sidebar/>
      </ReactFlowProvider>
    </div>
  );
}
