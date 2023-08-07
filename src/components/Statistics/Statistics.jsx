import { StatItemInPercent } from 'components/StatItemInPercent/StatItemInPercent';
import { StatSaction, StatTitle, StatList } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StatSaction className="statistics">
      <StatTitle className="title">{title}</StatTitle>
      <StatList className="stat-list">
        <StatItemInPercent stats={data} />
      </StatList>
    </StatSaction>
  );
};
