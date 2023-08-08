import {
  MainWrapper,
  ImageUser,
  Text,
  SocialItem,
  SocialList,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <MainWrapper className="profile">
      <div className="description">
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
      </div>
      <SocialList className="stats">
        <SocialItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </SocialItem>
        <SocialItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </SocialItem>
        <SocialItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </SocialItem>
      </SocialList>
    </MainWrapper>
  );
};

Profile.prototype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.img,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
