import { styled } from 'styled-components';

export const FriendsStyleItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px 0;
  box-shadow: 1px -1px 16px 0px rgba(0, 0, 0, 0.76);
`;

export const FriendsStyleSpan = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status === 'true' ? 'green' : 'red';
  }};
`;

export const FriendsStyleImg = styled.img`
  background-color: #f0f0f0;
  border-radius: 5px;
  margin-right: 5px;
`;
