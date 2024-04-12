import { useState } from "react";
import { FriendList } from "./components/FriendList"
import { FormAddFriend } from "./components/FormAddFriend"
import { FormSplitBill } from "./components/FormSplitBill"
import { Button } from "./components/Button";

/* eslint-disable react/prop-types */
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(!showAddFriend);
  };

  const handleSelection = (friend) => {
    // setSelectedFriend(friend)
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        selectedFriend?.id === friend.id
          ? { ...friend, balance: value + friend.balance}
          : friend
      )
    );

    setSelectedFriend(null)
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
};







