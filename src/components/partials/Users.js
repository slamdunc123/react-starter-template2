import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../redux/user/userActions'

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers()
  }, [])
  console.log(users)
  return (
    <div>
      {users
        &&
        users.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))
      }

    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
