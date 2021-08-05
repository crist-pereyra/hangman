import React, {useState} from 'react';
import Header from './comps/Header';
import Figure from './comps/Figure';
import WrongLetter from './comps/WrongLetter';
import Word from './comps/Word';
import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlaylable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

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
