import PropTypes from 'prop-types';
import {
  FriendsStyleImg,
  FriendsStyleItem,
  FriendsStyleSpan,
} from './FriendsItem.styled';

export const FriendsItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendsStyleItem className="item" key={id}>
        <FriendsStyleSpan
          className="status"
          status={isOnline.toString()}
        ></FriendsStyleSpan>
        <FriendsStyleImg
          className="avatar"
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{name}</p>
      </FriendsStyleItem>
    );
  });
};

FriendsItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
