import React, { useState, useEffect } from "react";

//Components
import FriendCard from "./FriendCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("friends")
      .then(res => {
        // console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.err(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Friends!</h1>
      <FriendForm />
      <div>
        {friends.map(friend => {
          return (
            <FriendCard
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FriendList;
