import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './usersTypes'

const initialState = {
  users: [],
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state
      }
    case GET_USERS_SUCCESS:
      return {
        users: action.payload,
        error: ''
      }
    case GET_USERS_FAILURE:
      return {
        users: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer