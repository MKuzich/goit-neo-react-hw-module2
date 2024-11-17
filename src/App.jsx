import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("feedback")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });
  const [totalFeedback, setTotalFeedback] = useState(0);

  useEffect(() => {
    setTotalFeedback(feedback.good + feedback.neutral + feedback.bad);
  }, [feedback]);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? <Feedback feedback={feedback} /> : <Notification />}
    </>
  );
}

export default App;
