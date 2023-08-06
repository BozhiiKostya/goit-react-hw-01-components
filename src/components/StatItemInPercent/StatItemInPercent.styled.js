import { styled } from 'styled-components';
import { getRandomColor } from '../Helper/RandomColor';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${getRandomColor};
  color: #fff;
`;
