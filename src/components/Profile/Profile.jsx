import { Description } from 'components/Description/Description';
import { SocialStats } from 'components/SocialStats/SocialStats';
import { MainWrapper } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <MainWrapper className="profile">
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <SocialStats stats={stats} />
    </MainWrapper>
  );
};
