import React, { useState, useEffect } from "react";

//Components
import FriendCard from "./FriendCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.err(err);
      });
    useEffect(() => {
      getData();
    }, []);
  };

  return (
    <div>
      <h1>Friends!</h1>
      <div>
        {friends.map(friend => {
          <FriendCard key={key} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default FriendList;
