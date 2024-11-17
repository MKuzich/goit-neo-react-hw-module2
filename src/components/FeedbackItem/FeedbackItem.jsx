import css from "./FeedbackItem.module.css";

const FeedbackItem = ({ option, count }) => {
  return (
    <p className={css.text}>
      {option}: {count}
    </p>
  );
};

export default FeedbackItem;
