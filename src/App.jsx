import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Diagram from './components/Diagram';

function App() {


  return (
    <>
      <header >
        <h1>test rules-ui</h1>
      </header>

      <main>
        <Diagram></Diagram>
      </main>
    </>
  );
}

export default App;
