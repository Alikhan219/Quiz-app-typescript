

import React, { useState } from 'react';
import QuestionCard from "./components/QuestionCard";


const App =( ) => {

const [loading, setLoading] = useState(false);
const [questions, setQuestions] = useState([]);
const [number, setNumber] = useState(0);
const [userAnswers, setUserAnswers] = useState([]);
const [score, setScore] = useState(0)
const [gameOver, setGameOver] = useState(true)

  const startTrivia= async()=> {

  }
  const checkAnswer= (e: React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion = ()=>{

  }
  return (

    <div>

     <h1>REACT QUIZ</h1>
     <button className="start" onClick={startTrivia}>
       Start
     </button>
<p className="score">Score:</p>
<p>Loading Question ...</p>
<QuestionCard />
<button className="next" onClick={nextQuestion}>Next Question</button>
      </div>
  );
}

export default App;
