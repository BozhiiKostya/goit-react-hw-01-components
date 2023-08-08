import styled from 'styled-components';
import { getRandomColor } from '../Helper/RandomColor';

export const StatSaction = styled.section`
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
  box-shadow: 1px -1px 16px 0px rgba(0, 0, 0, 0.76);
`;

export const StatTitle = styled.h2`
  padding: 20px 0;
  color: #a2a2a2;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${getRandomColor};
  color: #fff;
`;
