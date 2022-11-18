import { useState } from 'react';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Box } from '../App/App.styled';
import { useEffect } from 'react';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [countTotal, setCountTotal] = useState(0);
  const [countPercentage, setCountPercentage] = useState(0);

  const handleFeedback = e => {
    const name = e.currentTarget.name;

    switch (name) {
      case 'good':
        return setGood(prew => prew + 1);
      case 'neutral':
        return setNeutral(prew => prew + 1);
      case 'bad':
        return setBad(prew => prew + 1);
      default:
        return;
    }
  };

  useEffect(() => {
    const allState = good + neutral + bad;
    setCountTotal(allState);
    setCountPercentage(Math.round((100 / allState) * good) || 0);
  }, [good, neutral, bad]);
  return (
    <Box>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!!countTotal ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal}
            positivePercentage={countPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
};
