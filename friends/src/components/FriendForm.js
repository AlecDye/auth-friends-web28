import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: null,
    email: ""
  });
  const handleChanges = e => {
    e.preventDefault();
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("friends", newFriend)
      .then(res => {
        // console.log(res)
        setNewFriend(res.data);
      })
      .catch(err => console.error(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newFriend.name}
        onChange={handleChanges}
      />
      <input
        type="age"
        name="tel"
        placeholder="Age"
        value={newFriend.age}
        onChange={handleChanges}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newFriend.email}
        onChange={handleChanges}
      />
      <button>Add Friend</button>
    </form>
  );
};

export default FriendForm;
