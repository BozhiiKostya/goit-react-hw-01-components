import PropTypes from 'prop-types';
import { ImageUser, Text, Wrapper } from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <Wrapper className="description">
      <ImageUser src={avatar} alt="User avatar" className="avatar" />
      <Text className="username" size="26px">
        {username}
      </Text>
      <Text className="tag" color="#a0a0a0">
        @{tag}
      </Text>
      <Text className="location" color="#a0a0a0">
        {location}
      </Text>
    </Wrapper>
  );
};

Description.prototype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.img,
};
