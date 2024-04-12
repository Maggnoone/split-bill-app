import { Friend } from "./Friend"

export const FriendList = ({ friends, onSelection, selectedFriend }) => {
    return (
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    );
  };