import React from "react";

const FriendCard = props => {
  console.log("FriendCard", props);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default FriendCard;
