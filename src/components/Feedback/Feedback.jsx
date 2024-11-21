import FeedbackItem from "../FeedbackItem/FeedbackItem";

const Feedback = ({ feedback, positiveFeedback }) => {
  return (
    <ul>
      {Object.entries(feedback).map(([option, count]) => (
        <li key={option}>
          <FeedbackItem option={option} count={count} />
        </li>
      ))}
      <li>
        <FeedbackItem
          option="total"
          count={feedback.good + feedback.neutral + feedback.bad}
        />
      </li>
      <li>
        <FeedbackItem option="positive" count={positiveFeedback + "%"} />
      </li>
    </ul>
  );
};

export default Feedback;
