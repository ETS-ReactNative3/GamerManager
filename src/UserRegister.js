import React, { Component } from 'react';

class UserRegister extends Component {
  render() {
    return (
      <form>
        <p> <input type="text" placeholder="Name" /> </p>
        <p> <input type="text" placeholder="Surname" /> </p>
        <p> <input type="text" placeholder="Username" /> </p>
        <button>Add</button>
      </form>
    )
  }
}

export default UserRegister