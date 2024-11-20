import FeedbackItem from "../FeedbackItem/FeedbackItem";

const Feedback = ({ feedback }) => {
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
        <FeedbackItem
          option="positive"
          count={
            Math.round(
              (feedback.good /
                (feedback.good + feedback.neutral + feedback.bad)) *
                100
            ) + "%"
          }
        />
      </li>
    </ul>
  );
};

export default Feedback;
