import PropTypes from 'prop-types';
import { List, Green, Red } from './statistics.styiled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div >    
    <h2 >Statistics</h2>
    <List >
      <Green>Good: {good}</Green>
      <li>Neutral: {neutral}</li>
      <Red>Bad: {bad}</Red>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </List>
  </div>

);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};