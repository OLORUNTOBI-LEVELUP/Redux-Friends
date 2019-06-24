import React from "react"

const FriendCard = ({ friend }) => {
  return (
    <div>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  )
}

export default FriendCard