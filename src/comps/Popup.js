import React, {useEffect} from 'react'
import {checkWin} from '../helpers/helpers'

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlaylable, playAgain}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playlable = true;

    if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
        finalMessage = 'Congratulations! You won! 😃';
        playlable = false;
    }
    else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMessage = 'Unfortunately you lost. 😕';
        finalMessageRevealWord = `...the word was: ${selectedWord}`;
        playlable = false;
    }
    useEffect(() => setPlaylable(playlable));
    return (
        <div className="popup-container" style={finalMessage !== ''?{display:'flex'}: {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup
