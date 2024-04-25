import React from "react";
import styles from "../components/quizz1.module.css";

export default function Scorecard({ score, questions, handleTakeAgain }) {
  return (
    <>
      <div className={styles.scorecard}>
        <h2 className={styles.score}>
          Your Score: {score} out of {questions.length * 5}
        </h2>
        <button onClick={handleTakeAgain} className={styles.takeagain}>
          Take Again
        </button>
      </div>
    </>
  );
}
