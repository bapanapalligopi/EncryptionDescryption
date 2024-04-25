import { useState } from "react";
import styles from "../components/quizz1.module.css";
import Scorecard from "./Scorecard";
import Quizz from "./Quizz";
export default function Quizz1({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 5);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleTakeAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
        <Scorecard
          score={score}
          questions={questions}
          handleTakeAgain={handleTakeAgain}
        />
      ) : (
        <Quizz
          currentQuestion={currentQuestion}
          questions={questions}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}
