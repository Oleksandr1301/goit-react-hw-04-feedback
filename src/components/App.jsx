import { useState } from 'react';

import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Notification } from './/notification/notification';
import { Section } from './section/section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const handleLeaveFeedback = event => {
    const key = event.target.name;
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        break;
    }
  };

  
  const options = { good, neutral, bad } ;
    const total = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage();
    return (
      <>
        <Section className='section' title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleLeaveFeedback}
          />
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }

