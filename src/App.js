import './App.css';
import React, {useState, useContext} from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import End from './Components/EndScreen';

import {QuizContext} from "./help/Context";


function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz By rabah</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore }}>

        {gameState == "menu" && <MainMenu />}
        {gameState == "quiz" && <Quiz />}
        {gameState == "endscreen" && <End />}
        
      </QuizContext.Provider>
    </div>
  );
}

export default App;
