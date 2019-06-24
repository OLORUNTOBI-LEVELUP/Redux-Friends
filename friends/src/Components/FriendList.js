import React, { Component } from "react"
import { connect } from "react-redux"
import { getFriends } from "../state/actions"

import FriendCard from "./FriendCard"

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    const { fetching, friends } = this.props
    if (fetching) {
      return <div>Loading...</div>
    }
    return (
      <div>
        {friends &&
          friends.length > 0 &&
          friends.map(friend => <FriendCard friend={friend} key={friend.id} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsList.friends,
    fetching: state.friendsList.fetching
  }
}

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList)