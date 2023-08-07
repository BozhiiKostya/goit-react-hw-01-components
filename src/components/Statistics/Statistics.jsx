import { StatItemInPercent } from 'components/StatItemInPercent/StatItemInPercent';
import { StatSaction, StatTitle, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSaction className="statistics">
      <StatTitle className="title">{title}</StatTitle>
      <StatList className="stat-list">
        <StatItemInPercent stats={stats} />
      </StatList>
    </StatSaction>
  );
};
