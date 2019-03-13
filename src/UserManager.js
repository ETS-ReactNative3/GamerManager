import React, {Component} from 'react'
import UserRegister from './UserRegister'
import UserList from './UserList'

class UserManager extends Component {
  
  state = {
    users: [ {user: {
       name: '' ,
       surname: '',
       username: '',
       numberOfGames: 0}
    }]
    
  };
  
  handleAddUser = user => {
    this.setState(prevState => ({ users: [...prevState.users, user] }));
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