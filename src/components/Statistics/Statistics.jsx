import {
  StatSaction,
  StatTitle,
  StatList,
  StatItem,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSaction className="statistics">
      {title && <StatTitle>{title}</StatTitle>}
      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </StatSaction>
  );
};

Statistics.prototype = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
