import React, {Component} from 'react'
import UserRegister from './UserRegister'
import UserList from './UserList'

class UserManager extends Component {
  render() {
    return (
      <div>
        <p> <UserRegister /> </p>
        <p> <UserList users={this.props.users} /> </p>
      </div>
    );
  }
}

export default UserManager