import React, {Component} from 'react'
import UserRegister from './UserRegister'
import UserList from './UserList'

class UserManager extends Component {
  
  state = {
    users: []
  };
 
  
  handleAddUser = user => {
    
    let filteredUsers = this.state.users.filter(x=> x.username === user.username);
    
    if(filteredUsers.length === 0) {
      this.setState(prevState => ({ users: [...prevState.users, user] }));
    }
    else {
      alert(`${user.username} have been added!`);
    }
  };
  
  render() {
    return (
      <div>
        <UserRegister onAddUser={this.handleAddUser} /> 
        <UserList users={this.state.users} /> 
      </div>
    );
  }
}

export default UserManager