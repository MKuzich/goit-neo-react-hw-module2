import css from "./Options.module.css";

const Options = ({ feedback, updateFeedback, resetFeedback }) => {
  return (
    <ul className={css.list}>
      {Object.keys(feedback).map((option) => (
        <li key={option}>
          <button className={css.button} onClick={() => updateFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
      {feedback.good + feedback.neutral + feedback.bad > 0 && (
        <li>
          <button className={css.button} onClick={resetFeedback}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
