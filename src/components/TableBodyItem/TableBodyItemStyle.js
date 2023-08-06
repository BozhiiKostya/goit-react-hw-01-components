import { styled } from 'styled-components';

export const TableBodyTr = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-around;
  :hover {
    box-shadow: -6px -3px 53px 10px rgba(73, 105, 193, 0.55) inset;
  }

  background-color: ${props => {
    return props.counter % 2 === 0 ? 'red' : 'blue';
  }};
`;

export const TableBodyTd = styled.td`
  flex-grow: 1;
  padding: 5px 0;
  width: 100%;
  text-align: center;
  background-color: #fff;
`;
