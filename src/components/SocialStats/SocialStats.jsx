import PropTypes from 'prop-types';
import { SocialItem, SocialList } from './SocialStats.styled';

export const SocialStats = ({ user }) => {
  const {
    stats: { followers, views, likes },
  } = user;
  return (
    <SocialList className="stats">
      <SocialItem>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </SocialItem>
      <SocialItem>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </SocialItem>
      <SocialItem>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </SocialItem>
    </SocialList>
  );
};

SocialStats.prototype = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
