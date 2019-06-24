import axios from "axios"
const token =
  "eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQifQ"

axios.defaults.headers.common["Authorization"] = token

export const FETCH_START = "FETCH_START"
export const FETCH_SUCESSFUL = "FETCH_SUCESSFUL"
export const FETCH_FAIL = "FETCH_FAIL"

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_START })
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({ type: FETCH_SUCESSFUL, payload: res.data })
    })
    .catch(err => dispatch({ type: FETCH_FAIL, payload: err }))
}