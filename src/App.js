import React from 'react';
import Header from './comps/Header';
import Figure from './comps/Figure';
import WrongLetter from './comps/WrongLetter';
import Word from './comps/Word';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetter />
        <Word />
      </div>
    </>
  );
}

export default App;
