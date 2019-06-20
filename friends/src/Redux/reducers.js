import { combineReducers } from "redux"
import * as types from "./actions"

const friendsList = {
  friends: [],
  error: "",
  isFetching: false
}

const friends = (state = friendsList, action) => {
  switch (action.type) {
    case types.FETCH_START:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_SUCESSFUL:
      return {
        ...state,
        friends: action.payload,
        isFetching: false
      }
    case types.FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ friendsList: friends })

export default rootReducer