import PropTypes from 'prop-types';
import { StatItem } from './StatItemInPercent.styled';

export const StatItemInPercent = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => {
    return (
      <StatItem className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </StatItem>
    );
  });
};

StatItemInPercent.prototype = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
