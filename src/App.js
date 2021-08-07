import React, {useState, useEffect} from 'react';
import Header from './comps/Header';
import Figure from './comps/Figure';
import WrongLetter from './comps/WrongLetter';
import Word from './comps/Word';
import { showNotification as show} from './helpers/helpers';
import Notification from './comps/Notification'
import Popup from './comps/Popup'
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
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event =>{
      const {key, keyCode} = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter])
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter])
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);
  function playAgain (){
    setPlaylable(true);

    //Empty array
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = words[Math.floor(Math.random() * words.length)];
    selectedWord = words[random];
  }
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetter wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord = {selectedWord} setPlaylable={setPlaylable} playAgain={playAgain}/>
      <Notification showNotification ={showNotification}/>
    </>
  );
}

export default App;
