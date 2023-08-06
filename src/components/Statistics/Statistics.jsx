import { StatItemInPercent } from 'components/StatItemInPercent/StatItemInPercent';
import data from '../../data/data.json';
import { StatSaction, StatTitle, StatList } from './Statistics.styled';

export const Statistics = () => {
  return (
    <StatSaction className="statistics">
      <StatTitle className="title">Upload stats</StatTitle>
      <StatList className="stat-list">
        <StatItemInPercent stats={data} />
      </StatList>
    </StatSaction>
  );
};
