import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ImageUser = styled.img`
  width: 200px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;
export const Text = styled.p`
  font-size: ${props => {
    return props.size;
  }};
  color: ${props => {
    return props.color;
  }};
  margin-bottom: 5px;
`;
