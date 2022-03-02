import React from "react";

export default [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          <strong>start</strong>
        </>
      ),
    },
    position: { x: 280, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          when <strong>something</strong>
        </>
      ),
    },
    position: { x: 100, y: 100 },
    isHidden: true,
  },
  {
    id: '3',
    data: {
      label: (
        <>
          when <strong>this</strong> happens
        </>
      ),
    },
    position: { x: 250, y: 100 },
    style: {
      background: '#D6D5E6',
      color: '#333',
      border: '1px solid #222138',
      width: 120,
    },
  },
  {
    id: '4',
    position: { x: 250, y: 200 },
    data: {
      label: 'Another default node',
    },
    isHidden: true
  },
  {
    id: '5',
    data: {
      // label: 'Node id: 5',
      label: 'REJECT AD',
    },
    position: { x: 250, y: 230 },
  },
  {
    id: '6',
    type: 'output',
    data: {
      label: (
        <>
          An <strong>output node</strong>
        </>
      ),
    },
    position: { x: 380, y: 330 },
  },
  {
    id: '7',
    type: 'output',
    data: { label: 'Another output node' },
    position: { x: 260, y: 400 },
  },
  // { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  { id: 'e1-3', source: '1', target: '3' },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    animated: true,
    // label: 'animated edge',
    label: 'then',
  },
  // {
  //   id: 'e4-5',
  //   source: '4',
  //   target: '5',
  //   arrowHeadType: 'arrowclosed',
  //   label: 'edge with arrow head',
  // },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    label: 'smooth step edge',
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    type: 'step',
    style: { stroke: '#f6ab6c' },
    label: 'a step edge',
    animated: true,
    labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  },
];
