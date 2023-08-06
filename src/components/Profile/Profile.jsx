import { Description } from 'components/Description/Description';
import { SocialStats } from 'components/SocialStats/SocialStats';
import { MainWrapper } from './Profile.styled';

import user from '../../data/user.json';

export const Profile = () => {
  return (
    <MainWrapper className="profile">
      <Description user={user} />
      <SocialStats user={user} />
    </MainWrapper>
  );
};
