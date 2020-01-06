import axios from 'axios'

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './usersTypes'

export const getUsers = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data
        dispatch(getUsersSuccess(users))
      })
      .catch(error => {
        const errMsg = error.message
        dispatch(getUsersFailure(errMsg))
      })
  }
}

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST
  }
}

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users
  }
}

export const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error
  }
}


