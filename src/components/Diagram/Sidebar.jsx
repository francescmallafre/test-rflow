import React from "react";
import { useStoreState, useStoreActions } from 'react-flow-renderer';

export default function Sidebar() {
  const nodes = useStoreState((store) => store.nodes);
  const setSelectedElements = useStoreActions((actions) => actions.setSelectedElements);
  const doThat = () => {
    setSelectedElements(nodes.map((node) => ({ id: node.id, type: node.type })));
  };

  const onDragStart = (event, nodeType, nodeLabel) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('flow-label', nodeLabel);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="sidebar">
      <div className="description">Add node:</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input', 'condition')} draggable>
        Condition
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default', 'AND')} draggable>
        AND
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output', 'OR')} draggable>
        OR
      </div>
    </div>
  );
}
