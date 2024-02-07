
import { useState } from 'react';
import './App.css';

function QuizApp() {

  const quizData = [
    {
      question: 'Which language runs in a web browser?',
      choices: ['Java', 'Python', 'JavaScript'],
      correctAnswer: 'JavaScript',
    },
    {
      question: 'Who is responsible for the creation of the JavaScript programming language?',
      choices: ['Larry Wall', 'Brendan Eich', 'Guido van Rossum'],
      correctAnswer: 'Brendan Eich',
    },
    {
      question: 'Who developed the React.js library for building user interfaces?',
      choices: ['Evan You', 'Jordan Walke', 'Ryan Dahl'],
      correctAnswer: 'Jordan Walke',
    },
    {
      question: 'React is an open-source JavaScript library developed by what company?',
      choices: ['Facebook', 'Microsoft', 'Google'],
      correctAnswer: 'Facebook',
    },
    {
      question: '_______ is a package manager for JavaScript programming language.',
      choices: ['cli', 'wpm', 'npm'],
      correctAnswer: 'npm',
    },

  ]


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false); 

  const handleReloadClick = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }


  const chosenAnswerHandle = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
     
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1)
      console.log(currentQuestion);
    } else {
      setShowResult(true);
    }
  }


  return (
   <>
    <div className="quiz-container">
        {showResult ? (
        <div>
          <h2>{`The result is ${score}/${quizData.length}`}</h2>
          <button onClick={handleReloadClick}>Try Again</button>
        </div>
          ) : (
          <div className='quiz-question'>
            <h2>{quizData[currentQuestion].question}</h2>
            <ul>
              {quizData[currentQuestion].choices.map((choice, index) => (
                <li key={index} onClick={() => chosenAnswerHandle(choice)}>{choice}</li>
              ))}
            </ul>
          </div>
          )
        }
    </div>
   </>
  );
}

export default QuizApp;
