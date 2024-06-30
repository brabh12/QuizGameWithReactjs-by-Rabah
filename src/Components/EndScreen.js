import React, {useContext} from 'react'
import { QuizContext } from '../help/Context';
import {Questions} from "../help/Ques"
import '../App.css';

function End() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const playAgain = () => {
    setScore(0)
    setGameState("menu")
  }
  return <div className='EndScreen'><h1> Thank you for playin with me</h1><h3>{score} / {Questions.length}</h3>
  <button onClick={playAgain}>Play Again</button></div>;
}
export default End;