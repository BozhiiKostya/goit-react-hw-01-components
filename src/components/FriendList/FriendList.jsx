import { FriendsItem } from 'components/FriendsItem/FriendsItem';
import { FriendWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendWrapper className="friend-list">
      <FriendsItem friends={friends} />
    </FriendWrapper>
  );
};
