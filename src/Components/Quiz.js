import React, {useState, useContext} from 'react';
import {Questions} from "../help/Ques";
import { QuizContext } from '../help/Context';

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);

  };
  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setGameState("endscreen")
  };
  return (
  <div className='Quiz'>
    <h1>{Questions[currQuestion].prompt}</h1>
    <div className='options'>
      <button onClick={() => setOptionChosen("A")}> {Questions[currQuestion].optionA} </button>
      <button onClick={() => setOptionChosen("B")}> {Questions[currQuestion].optionB} </button>
      <button onClick={() => setOptionChosen("C")}> {Questions[currQuestion].optionC} </button>
      <button onClick={() => setOptionChosen("D")}> {Questions[currQuestion].optionD} </button>
    </div>

  {currQuestion == Questions.length - 1 ? (
    <button onClick={finishQuiz}>The End</button>
  ) : (
    <button onClick={nextQuestion}>Next</button>
  )}
    
  </div>
  );
}

export default Quiz