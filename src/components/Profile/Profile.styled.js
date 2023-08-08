import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  padding-top: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px -1px 16px 0px rgba(0, 0, 0, 0.76);
`;

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
export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px;
  background-color: #f0f0f0;
  padding: 15px 0;
  border-radius: 0 0 10px 10px;
`;

export const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
`;
