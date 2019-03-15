import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserRegister extends Component {
  
  state = {
    user: {
       name: '' ,
       surname: '',
       username: '',
       numberOfGames: 0
    }
  }

  nameChange = event => {
    var user = {...this.state.user}
    user.name = event.target.value;
    this.setState({user})
  };

  surnameChange = event => {
    var user = {...this.state.user}
    user.surname = event.target.value;
    this.setState({user})
  };

  usernameChange = event => {
    var user = {...this.state.user}
    user.username = event.target.value;
    this.setState({user})
  };

  addUser = event => {
    event.preventDefault();    
    this.props.onAddUser(this.state.user);
  }

  isAnyInputEmpty = () => {
    return this.state.user.name === '' || this.state.user.surname === '' || this.state.user.username === '' ;
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input type="text" placeholder="Name" onChange={this.nameChange} value={this.state.user.name} />
        <input type="text" placeholder="Surname" onChange={this.surnameChange} value={this.state.user.surname} /> 
        <input type="text" placeholder="Username" onChange={this.usernameChange} value={this.state.user.username} />
        
        <button disabled={this.isAnyInputEmpty()} >Add</button>
      </form>
    )
  }
}

UserRegister.propTypes = {
  onAddUser: PropTypes.func.isRequired
};

export default UserRegister