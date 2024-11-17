import css from "./Feedback.module.css";
import FeedbackItem from "../FeedbackItem/FeedbackItem";

const Feedback = ({ feedback }) => {
  const totalFeedback = Object.values(feedback).reduce(
    (acc, i) => (acc += i),
    0
  );
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <ul>
      {Object.entries(feedback).map(([option, count]) => (
        <li key={option}>
          <FeedbackItem option={option} count={count} />
        </li>
      ))}
      <li>
        <FeedbackItem option="total" count={totalFeedback} />
      </li>
      <li>
        <FeedbackItem option="positive" count={positiveFeedback + "%"} />
      </li>
    </ul>
  );
};

export default Feedback;
