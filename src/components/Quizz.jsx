import styles from "../components/quizz1.module.css";

export default function Quizz({
  currentQuestion,
  questions,
  handleAnswerOptionClick,
}) {
  return (
    <>
      <div className={styles.quizz}>
        <div className={styles.quizzhead}>Quizz on Caesar Cipher</div>
        <div className={styles.quizzbody}>
          <div className={styles.questionno}>
            Question {currentQuestion + 1}
          </div>
          <div className={styles.question}>
            {questions[currentQuestion].question}
          </div>
          <div className={styles.answers}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                className={styles.answer}
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
