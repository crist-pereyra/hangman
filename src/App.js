import React from 'react';
import Header from './comps/Header';
import Figure from './comps/Figure';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
      </div>
    </>
  );
}

export default App;
