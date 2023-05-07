import PropTypes from 'prop-types';
import { Feedback, Buttons } from './feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Feedback > 
    {Object.keys(options).map(option => (
    <Buttons
      key={option}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
    
    >
        {option}
    </Buttons>
  ))}
  </Feedback>
);

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}